import {Component, Input, NgZone, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter} from 'angular2/core';
import {FormBuilder, Validators} from 'angular2/common';
import {Observable} from 'rxjs';
import {IFloor} from '../../services/FloorService';
import {FloorElementsService, IFloorElement} from '../../services/FloorElementsService';
import {Room} from './room';
import {SOCKET_URL} from '../../constants';
import {ReservationModal} from '../reservation/reservation-modal';
import {AppService} from '../../services/AppService';
import {FloorService} from '../../services/FloorService';
import {Placeholder} from './placeholder';
import {Line} from './line';
import {Icon} from './icon';
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
  directives: [Room, Icon, PlaceElement, Placeholder, Line, Droppable, LoadingIndicator],
  styleUrls: ['styles/floors/floor.css', 'styles/floors/floors.css'],
  template: `
  <div [ngClass]="{'design-mode': designMode}">
    <ul class="list-inline">
      <li>
        <h1 *ngIf="!editMode">
          {{ floor.floorName }}
          <span *ngIf="designMode">
            <a (click)="switchEditMode()" class="button"><i class="fa fa-pencil"></i></a>
          </span>
        </h1>
        <div *ngIf="editMode" class="header">
          <form [ngFormModel]="editFloorNameForm">
            <input type="text" name="floorName" id="floorName" ngControl="floorName">
            <button (click)="submitEditFloorNameForm($event)" type="submit" class="button"><i class="fa fa-check"></i></button>
            <button (click)="cancelEditFloorNameForm($event)" class="button"><i class="fa fa-times"></i></button>
          </form>
        </div>
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
          <line *ngSwitchWhen="'line'" [data]="element" place-element></line>
          <placeholder *ngSwitchWhen="'placeholder'" [data]="element" place-element></placeholder>
          <icon *ngSwitchDefault [data]="element" place-element></icon>
        </div>
      </div>
    </div>
  </div>
  `
})

export class Floor {
  @Input() floor: IFloor;
  @Input() isLoading: boolean;
  // @Output() deleteFloor = new EventEmitter();
  // @Output() updateFloor = new EventEmitter();
  floorElements: Array<IFloorElement>;
  reservations: Array<IReservation>;
  floorElementsObservable;
  editMode: boolean;
  designMode: boolean;
  editFloorNameForm;

  constructor(private floorElementsService: FloorElementsService,
    private changeRef: ChangeDetectorRef, private DesignService: DesignService,
    private ReservationService: ReservationService, private fb: FormBuilder,
    private floorService: FloorService
  ) {
    this.floorElements = [];
    this.floorElementsObservable = this.floorElementsService.getObservable();
    this.floorElementsObservable.connect();
    this.designMode = DesignService.designModeState;
    this.isLoading = false;
  }

  switchEditMode() {
    this.editMode = true;
  }

  cancelEditFloorNameForm(e) {
    e.preventDefault();
    this.editMode = false;
  }

  submitEditFloorNameForm(e) {
    e.preventDefault();
    this.isLoading = true;
    this.floorService.updateFloor(this.floor.floorID, {
      floorName: this.editFloorNameForm.value.floorName
    })
      .delay(500)
      .subscribe(
        (res: any) => {
          this.editMode = false;
          this.isLoading = false;
          this.floor.floorName = this.editFloorNameForm.value.floorName;
        }
      );
  }

  // changeOrder(direction) {
  //   this.isLoading = true;
  //   this.updateFloor
  //     .next({
  //       floorID: this.floor.floorID,
  //       type: 'order',
  //       direction: direction
  //     });
  // }
  //
  // showDeleteFloorConfirmation() {
  //   this.showConfirmDeletion = true;
  //   if (this.overlayObservable.subscription) {
  //     this.overlayObservable.subscription
  //       .next({
  //         type: 'show',
  //         message: `You are about to delete a floor. Are you sure you want to do that?
  //           Be aware that you will also delete the reservations.`,
  //         panelType: 'confirmation',
  //         id: this.floor.floorID
  //       });
  //   }
  // }

  // deleteFloor() {
  //   this.isLoading = true;
  //   this.floorService.deleteFloor(this.floor.floorID)
  //     .delay(200)
  //     .subscribe(
  //       (res: any) => {
  //         if (res.status === 204) {
  //           console.log(this.componentRef);
  //           // this.componentRef.dispose();
  //         }
  //       }
  //     );
  // }

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
    this.editFloorNameForm = this.fb.group({
      floorName: [this.floor.floorName, Validators.required]
    });
  }

}
