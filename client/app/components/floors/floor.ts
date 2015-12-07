import {Component, Input, NgIf, NgClass, NgFor, NgSwitch, NgZone, NgSwitchWhen,
  ChangeDetectionStrategy, NgSwitchDefault, Observable, ChangeDetectorRef, OnChanges} from 'angular2/angular2';
import {IFloor} from '../../services/FloorService';
import {FloorElementsService, IFloorElement} from '../../services/FloorElementsService';
import {Room} from './room';
import {Reservation} from '../reservation/reservation';
import {Placeholder} from './placeholder';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {PlaceElement} from '../../directives/place-element';
import {Droppable} from '../../directives/droppable';
import {DesignService} from '../../services/DesignService';
import * as _ from 'lodash';
import * as io from 'socket.io-client';

@Component({
  selector: 'floor',
  providers: [FloorElementsService],
  directives: [NgFor, NgIf, NgClass, NgSwitch, NgSwitchWhen, NgSwitchDefault, Room,
    PlaceElement, Reservation, Placeholder, Droppable, LoadingIndicator],
  styleUrls: ['styles/floors/floor.css'],
  template: `
  <div [ng-class]="{'design-mode': designMode}">
    <ul class="list-inline">
      <li>
        <h1>{{ floor.floorName }}</h1>
      </li>
      <li>
        <loading-indicator *ng-if="isLoading" mini="true"></loading-indicator>
      </li>
    </ul>
    <div [attr.id]="'floor' + floor.floorID" class="floor" droppable-element
      [attr.data-id]="floor.floorID" [ng-class]="{loading: isLoading}">
      <div class="inner">
        <div *ng-for="#element of floorElements" [ng-switch]="element.elementType">
          <Reservation *ng-if="!designMode" [data]="element" place-element type="modal"></Reservation>
          <Room *ng-switch-when="'room'" [data]="element" place-element></Room>
          <Placeholder [data]="element" place-element *ng-switch-default></Placeholder>
        </div>
      </div>
    </div>
  </div>
  `
})

export class Floor {
  floorElements: Array<IFloorElement>;
  floorElementsObservable;
  @Input() floor: IFloor;
  @Input() isLoading: boolean;
  designMode: boolean;

  constructor(private floorElementsService: FloorElementsService,
    private changeRef: ChangeDetectorRef, private DesignService: DesignService
  ) {
    this.floorElements = [];
    this.floorElementsObservable = this.floorElementsService.getObservable();
    this.floorElementsObservable.connect();
    this.designMode = DesignService.designModeState;
    this.isLoading = false;
  }

  fetch(floorID) {
    this.isLoading = true;
    this.floorElementsService.fetchElementsByFloorID(floorID)
      .delay(200)
      .subscribe(
        (res: any) => {
          let arr = res.json().data;
          this.floorElements = arr;
            this.isLoading = false;
          this.changeRef.markForCheck();
        }
      );
  }

  ngOnInit() {
    let socket = io.connect('http://localhost:5555');

    socket.on('elements', (res) => {
      if (!this.DesignService.designModeState) {
        let index = _.findIndex(this.floorElements, { elementID: res.elementID });
        if (res.floorID === this.floor.floorID) {
          if (index === -1) {
            this.floorElements.push(res);
          } else {
            this.floorElements[index] = res;
          }
        }
      }
    });

    this.floorElementsObservable
      .subscribe((res: any) => {
        if (res.type === 'data') {
          this.isLoading = false;
          this.floorElements = res.data;
        } else {
          this.isLoading = true;
        }
        this.changeRef.detectChanges();
      });

    this.fetch(this.floor.floorID);
  }

}
