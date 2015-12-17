import {Component, Attribute, NgIf, Input, OnInit, ElementRef, ChangeDetectorRef} from 'angular2/angular2';
import {Observable} from 'rxjs';
import {DATE_FORMAT} from '../../constants';
import {IFloorElement} from '../../services/FloorElementsService';
import {IReservation, ReservationService} from '../../services/ReservationService';
import {EditElement} from '../design/edit-element';
import {Resizable} from '../../directives/resizable';
import {Draggable} from '../../directives/draggable';
import {Tooltip} from '../../directives/tooltip';
import {PlaceElement} from '../../directives/place-element';
import {ReservationModal} from '../reservation/reservation-modal';
import {FloorElementsService} from '../../services/FloorElementsService';
import {DesignService} from '../../services/DesignService';
import * as moment from 'moment';

declare var jQuery:any;

@Component({
  selector: 'room',
  directives: [NgIf, Resizable, Draggable, EditElement, PlaceElement, ReservationModal, EditElement,
    Tooltip],
  inputs: ['data', 'designMode'],
  styleUrls: ['styles/floors/room.css'],
  template: `
    <div class="wrapper" resizable-element draggable-element
    [containment]="'#floor' + data.floorID" [attr.element-id]="data.elementID" [attr.data-id]="data.floorID"
      [class.reserved]="!designMode && !isActive" [class.not-match]="!designMode && !isMatch">
      <reservation-modal *ng-if="!designMode" [data]="data" place-element [place-type]="'modal'"></reservation-modal>
      <edit-element *ng-if="designMode" place-element place-type="modal" [data]="data"></edit-element>
      <div class="room" (click)="handleClick()" tooltip [data]="data" [reservations]="reservations">
        <div><span>{{ data.elementName }}</span></div>
        <div class="second-line">
          <a *ng-if="designMode" (click)="editElement()"><i class="fa fa-pencil"></i></a>
          <div *ng-if="!designMode && isActive && isMatch">
            <div class="features pull-left">
              <span><i class="fa fa-user"></i> {{ data.capacity }}</span>
              <span><i class="fa fa-television" *ng-if="data.features && data.features.indexOf('tv') > -1"></i></span>
              <span><i class="fa fa-phone" *ng-if="data.features && data.features.indexOf('phone') > -1"></i></span>
            </div>
            <div class="book pull-right hidden-xs">
              <i class="fa fa-plus-square"></i>
            </div>
            <i class="visible-xs fa fa-plus-square"></i>
          </div>
          <div *ng-if="!designMode && !isActive" class="reserved">
            <i class="visible-xs fa fa-ban"></i>
            <span>Reserved</span>
          </div>
          <div *ng-if="!designMode && isActive && !isMatch" class="reserved">
            <i class="visible-xs fa fa-filter"></i>
            <span>Not a match</span>
          </div>
        </div>
      </div>
    </div>
  `
})

export class Room implements OnInit {
  @Input() data: IFloorElement;
  reservations: Array<IReservation>;
  floorElementsObservable;
  designMode: boolean;
  reservationObserver;
  designObservable;
  reservationSubscriber;
  filterSubscription;
  isActive: boolean;
  isMatch: boolean;
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

  startReservation() {
    if (this.isActive) {
      this.reservationObserver
        .subscription
        .next(this.data.elementID);
    }
  }

  editElement() {
    this.designObservable
      .subscription
      .next({
        type: 'edit',
        data: this.data.elementID
      });
  }

  checkAvailability() {
    this.isMatch = true;
    this.isActive = true;
    if (!this.designMode && this.filter) {
      Observable.fromArray(this.reservations)
        .filter((res: any) => {
          return moment.utc(this.filter.reservationDate).diff(res.reservationDate) >= 0 ||
            moment.utc(this.filter.reservationEndDate).diff(res.reservationDate) >= 0;
        })
        .filter((res: any) => {
          return moment.utc(this.filter.reservationDate).diff(res.reservationEndDate) < 0;
        })
        .filter(res => {
          return res.elementID === this.data.elementID;
        })
        .subscribe(res => {
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
      this.startReservation();
    }
  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
    this.reservationSubscriber.unsubscribe();
  }

  ngOnInit() {
    if (!this.reservationFilterObserver.subscription) {
      this.reservationFilterObserver.connect();
    }
    if (!this.reservationObserver.subscription) {
      this.reservationObserver.connect();
    }
    this.filterSubscription = this.reservationFilterObserver
      .subscribe(res => {
        this.filter = this.ReservationService.filter;
        this.checkAvailability();
      });
    this.reservations = this.ReservationService.reservations;
    this.filter = this.ReservationService.filter;
    this.checkAvailability();
    this.reservationSubscriber = this.reservationObserver
      .subscribe(res => {
        if (res && res.type) {
          this.reservations = res.data;
          this.checkAvailability();
        }
      });
  }
}
