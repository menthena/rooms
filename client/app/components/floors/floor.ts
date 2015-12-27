import {Component, Input, NgZone, ChangeDetectionStrategy, ChangeDetectorRef, ComponentRef} from 'angular2/core';
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
  directives: [Room, PlaceElement, Placeholder, Line, Droppable, LoadingIndicator],
  styleUrls: ['styles/floors/floor.css'],
  template: `
  <div [ngClass]="{'design-mode': designMode}">
    <ul class="list-inline">
      <li>
        <h1 *ngIf="!editMode">
          {{ floor.floorName }}
          <span *ngIf="designMode">
            <a (click)="switchEditMode()">Edit</a>
          </span>
        </h1>
        <div *ngIf="editMode">
          <form [ngFormModel]="editFloorNameForm">
            <input type="text" name="floorName" id="floorName" ngControl="floorName">
            <a (click)="submitEditFloorNameForm()">Submit</a>
            <a (click)="cancelEditFloorNameForm()">Cancel</a>
          </form>
        </div>
        <div *ngIf="designMode" class="pull-right">
          <a (click)="showDeleteFloorConfirmation()">Delete</a>
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
  overlayObservable;
  editMode: boolean;
  designMode: boolean;
  editFloorNameForm;
  showConfirmDeletion: boolean;

  constructor(private floorElementsService: FloorElementsService,
    private changeRef: ChangeDetectorRef, private DesignService: DesignService,
    private ReservationService: ReservationService, private fb: FormBuilder,
    private AppService: AppService, private floorService: FloorService,
    private componentRef: ComponentRef
  ) {
    this.floorElements = [];
    this.floorElementsObservable = this.floorElementsService.getObservable();
    this.floorElementsObservable.connect();
    this.designMode = DesignService.designModeState;
    this.isLoading = false;
    this.overlayObservable = this.AppService.overlayObservable;
  }

  switchEditMode() {
    this.editMode = true;
  }

  cancelEditFloorNameForm() {
    this.editMode = false;
  }

  submitEditFloorNameForm() {
    this.editMode = false;
  }

  showDeleteFloorConfirmation() {
    this.showConfirmDeletion = true;
    if (this.overlayObservable.subscription) {
      this.overlayObservable.subscription
        .next({
          type: 'show',
          message: `You are about to delete a floor. Are you sure you want to do that?
            Be aware that you will also delete the reservations.`,
          panelType: 'confirmation',
          id: this.floor.floorID
        });
    }
  }

  deleteFloor() {
    this.isLoading = true;
    this.floorService.deleteFloor(this.floor.floorID)
      .delay(200)
      .subscribe(
        (res: any) => {
          if (res.status === 204) {
            console.log(this.componentRef.dispose());
          }
        }
      );
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
    this.editFloorNameForm = this.fb.group({
      floorName: [this.floor.floorName, Validators.required]
    });

    this.overlayObservable
      .subscription
      .subscribe((res) => {
        if (res.type === 'response' && this.floor.floorID === res.id) {
          if (res.data) {
            this.deleteFloor();
          }
        }
      });
  }

}
