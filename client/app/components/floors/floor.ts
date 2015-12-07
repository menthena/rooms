import {Component, Input, NgClass, NgFor, NgSwitch, NgZone, NgSwitchWhen,
  ChangeDetectionStrategy, NgSwitchDefault, Observable, ChangeDetectorRef, OnChanges} from 'angular2/angular2';
import {IFloor} from '../../services/FloorService';
import {FloorElementsService, IFloorElement} from '../../services/FloorElementsService';
import {Room} from './room';
import {Reservation} from '../reservation/reservation';
import {Placeholder} from './placeholder';
import {PlaceElement} from '../../directives/place-element';
import {Droppable} from '../../directives/droppable';
import {DesignService} from '../../services/DesignService';
import * as _ from 'lodash';

@Component({
  selector: 'floor',
  providers: [FloorElementsService],
  directives: [NgFor, NgClass, NgSwitch, NgSwitchWhen, NgSwitchDefault, Room, PlaceElement, Reservation, Placeholder, Droppable],
  styleUrls: ['styles/floors/floor.css'],
  template: `
  <div [ng-class]="{'design-mode': designMode}">
    <h1>{{ floor.floorName }}</h1>
    <div class="floor" droppable-element>
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
  designMode: boolean;

  constructor(private floorElementsService: FloorElementsService, private changeRef: ChangeDetectorRef, DesignService: DesignService) {
    this.floorElements = [];
    this.floorElementsObservable = this.floorElementsService.getObservable();
    this.floorElementsObservable.connect();
    this.designMode = DesignService.designModeState;
  }

  ngOnInit() {
    this.floorElementsObservable
      .subscribe((res: any) => {
        this.floorElements.push(res);
        this.changeRef.detectChanges();
      });
    this.floorElementsService.fetchElementsByFloorID(this.floor.floorID)
      .subscribe(
        (res: any) => {
          let arr = res.json();
          arr = _.filter(arr, { floorID: this.floor.floorID });
          // console.log(this.floor, arr);
          this.floorElements = arr;
          this.changeRef.markForCheck();
        }
      );
  }

}
