import {Component, Attribute,  Input, OnInit, ElementRef, ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {DATE_FORMAT} from '../../config/constants';
import {IFloorElement} from '../../services/FloorElementsService';
import {IReservation, ReservationService} from '../../services/ReservationService';
import {EditElement} from '../design/edit-element';
import {Resizable} from '../../directives/resizable';
import {Draggable} from '../../directives/draggable';
import {Popover} from '../../directives/popover';
import {PlaceElement} from '../../directives/place-element';
import {ReservationModal} from '../reservation/reservation-modal';
import {FloorElementsService} from '../../services/FloorElementsService';
import {DesignService} from '../../services/DesignService';

declare var jQuery:any;
declare var moment:any;
declare var _:any;

@Component({
  selector: 'room',
  styleUrls: ['styles/floors/room.css', 'styles/common/controls.css'],
  template: `
    <div class="wrapper control" resizable-element draggable-element
    [containment]="'#floor' + data.floorID" [attr.element-id]="data.elementID" [attr.data-id]="data.floorID"
      [class.reserved]="!designMode && !isActive" [class.not-match]="!designMode && !isMatch"
      [class.reservation-modal-opened]="reservationModalOpened">
      <reservation-modal
        *ngIf="!designMode"
        [activeReservation]="activeReservation"
        [data]="data"
        place-element [placeType]="'modal'"></reservation-modal>
      <edit-element *ngIf="designMode" place-element place-type="modal" [data]="data"></edit-element>
      <popover [data]="data" [reservations]="reservations"
        (edit-reservation)="handleEditReservation()"
        [activeReservation]="activeReservation"></popover>
      <div class="room" (click)="handleClick()">
        <div><span>{{ data.elementName }}</span></div>
        <div class="second-line">
          <div *ngIf="designMode">
            <a (click)="editElement()"><i class="fa fa-pencil"></i></a>
            <a (click)="destroy()"><i class="fa fa-trash"></i></a>
          </div>
          <div *ngIf="!designMode && isActive && isMatch">
            <div class="features pull-left">
              <span class="capacity"><i class="fa fa-user"></i> <span>{{ data.capacity }}</span></span>
              <span><i class="fa fa-television" *ngIf="data.features && data.features.indexOf('tv') > -1"></i></span>
              <span><i class="fa fa-phone" *ngIf="data.features && data.features.indexOf('phone') > -1"></i></span>
            </div>
            <div class="book pull-right hidden-xs">
              <i class="fa fa-plus-square"></i>
            </div>
            <i class="visible-xs fa fa-plus-square pull-right"></i>
          </div>
          <div *ngIf="!designMode && !isActive" class="reserved">
            <span>Reserved</span>
          </div>
          <div *ngIf="!designMode && isActive && !isMatch" class="reserved">
            <span>Not a match</span>
          </div>
        </div>
      </div>
    </div>
  `
})

export class Room implements OnInit {
  @Input() data: IFloorElement;
  @Input() reservations: Array<IReservation>;
  @Input() filter: any;
  activeReservation: IReservation;
  floorElementsObservable;
  designMode: boolean;
  reservationObserver;
  designObservable;
  reservationSubscriber;
  filterSubscription;
  isActive: boolean;
  isMatch: boolean;
  reservationModalOpened: boolean;
  filter: any;
  reservationFilterObserver;

  constructor(private elementRef: ElementRef, private ReservationService: ReservationService,
      DesignService: DesignService, private FloorElementsService: FloorElementsService,
      private changeRef: ChangeDetectorRef) {
    this.reservationFilterObserver = ReservationService.getReservationFilterObserver();
    this.reservationObserver = ReservationService.getObservable();
    this.isActive = true;
    this.isMatch = true;
    this.designObservable = DesignService.getObservable();
    this.designMode = DesignService.designModeState;
  }

  openReservationModal() {
    this.reservationModalOpened = true;
    this.checkAvailability();
    this.reservationObserver
      .subscription
      .next(this.data.elementID);
  }

  handleEditReservation() {
    this.openReservationModal();
  }

  destroy() {
    this.FloorElementsService
      .deleteElement(this.data.floorID, this.data.elementID);
  }

  editElement() {
    this.designObservable
      .subscription
      .next({
        type: 'edit',
        data: this.data.elementID
      });
  }

  getActiveReservation(res) {
    if (res) {
      this.activeReservation = _.find(this.reservations, { reservationID: res.reservationID });
    }
  }

  checkAvailability() {
    this.isMatch = true;
    this.isActive = true;
    this.activeReservation = undefined;
    if (Observable && !this.designMode && this.filter) {
      Observable.fromArray(this.reservations)
        .filter(res => {
          return res.elementID === this.data.elementID;
        })
        .filter((res: any) => {
          return moment.utc(this.filter.reservationDate).diff(res.reservationDate) >= 0 ||
            moment.utc(this.filter.reservationEndDate).diff(res.reservationDate) >= 0;
        })
        .filter((res: any) => {
          return moment.utc(this.filter.reservationDate).diff(res.reservationEndDate) < 0;
        })
        .subscribe((res: any) => {
          this.getActiveReservation(res);
          this.isActive = false;
        });
      if (this.filter.capacity > this.data.capacity) {
        this.isMatch = false;
      }
      if (this.filter.features) {
        this.filter.features.map((res) => {
          if (this.data.features.indexOf(res) === -1) {
            this.isMatch = false;
          }
        });
      }
      this.changeRef.detectChanges();
    }
  }

  handleClick() {
    if (!this.designMode && this.isActive && this.isMatch) {
      this.openReservationModal();
    }
  }

  ngOnDestroy() {
    if (this.filterSubscription && this.reservationSubscriber) {
      this.filterSubscription.unsubscribe();
      this.reservationSubscriber.unsubscribe();
    }
  }

  ngOnInit() {
    if (!this.reservationFilterObserver.subscription) {
      this.reservationFilterObserver.connect();
    }
    if (!this.reservationObserver.subscription) {
      this.reservationObserver.connect();
    }
    if (this.reservationFilterObserver) {
      this.filterSubscription = this.reservationFilterObserver
        .subscribe(res => {
          this.filter = this.ReservationService.filter;
          this.checkAvailability();
        });
    }
    if (this.ReservationService.reservations) {
      this.reservations = this.ReservationService.reservations;
    }
    if (!this.filter && this.ReservationService.filter) {
      this.filter = this.ReservationService.filter;
    }
    this.checkAvailability();
    if (this.reservationObserver) {
      this.reservationSubscriber = this.reservationObserver
        .subscribe(res => {
          if (res === undefined) {
            this.reservationModalOpened = false;
          }
          this.reservations = this.ReservationService.reservations;
          this.checkAvailability();
      });
    }
  }
}
