import {Component, Input, NgZone, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';
import {Observable} from 'rxjs';
import {IFloor} from '../../services/FloorService';
import {FloorElementsService, IFloorElement} from '../../services/FloorElementsService';
import {Room} from './room';
import {SOCKET_URL} from '../../constants';
import {ReservationModal} from '../reservation/reservation-modal';
import {Placeholder} from './placeholder';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {PlaceElement} from '../../directives/place-element';
import {EditElement} from '../design/edit-element';
import {Droppable} from '../../directives/droppable';
import {DesignService} from '../../services/DesignService';
import {IReservation, ReservationService} from '../../services/ReservationService';
import * as _ from 'lodash';
import * as io from 'socket.io-client';

@Component({
  selector: 'floor',
  providers: [FloorElementsService],
  directives: [Room, PlaceElement, Placeholder, Droppable, LoadingIndicator],
  styleUrls: ['styles/floors/floor.css'],
  template: `
  <div [ngClass]="{'design-mode': designMode}">
    <ul class="list-inline">
      <li>
        <h1>{{ floor.floorName }}</h1>
      </li>
      <li>
        <loading-indicator *ngIf="isLoading" mini="true"></loading-indicator>
      </li>
    </ul>
    <div [attr.id]="'floor' + floor.floorID" class="floor" droppable-element
      [attr.data-id]="floor.floorID" [ngClass]="{loading: isLoading}">
      <div class="inner">
        <div *ngFor="#element of floorElements" [ngSwitch]="element.elementType">
          <room *ngSwitchWhen="'room'" [data]="element" place-element></room>
          <placeholder [data]="element" place-element *ngSwitchDefault></placeholder>
        </div>
      </div>
    </div>
  </div>
  `
})

export class Floor {
  @Input() floor: IFloor;
  @Input() isLoading: boolean;
  floorElements: Array<IFloorElement>;
  reservations: Array<IReservation>;
  floorElementsObservable;
  designMode: boolean;

  constructor(private floorElementsService: FloorElementsService,
    private changeRef: ChangeDetectorRef, private DesignService: DesignService,
    private ReservationService: ReservationService
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
    let socket = io.connect(SOCKET_URL);

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

    socket.on('reservations', (res) => {
      if (!this.DesignService.designModeState) {
        this.ReservationService.fetchReservations()
          .subscribe(() => {
            this.reservations = this.ReservationService.reservations;
            this.changeRef.markForCheck();
          });
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
