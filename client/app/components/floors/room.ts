import {Component, Attribute, NgIf, Input, OnInit, ElementRef} from 'angular2/angular2';
import {Observable} from 'rxjs';
import {DATE_FORMAT} from '../../constants';
import {IFloorElement} from '../../services/FloorElementsService';
import {IReservation, ReservationService} from '../../services/ReservationService';
import {EditElement} from '../design/edit-element';
import {Resizable} from '../../directives/resizable';
import {Draggable} from '../../directives/draggable';
import {FloorElementsService} from '../../services/FloorElementsService';
import {DesignService} from '../../services/DesignService';
import * as moment from 'moment';

declare var jQuery:any;

@Component({
  selector: 'room',
  directives: [NgIf, Resizable, Draggable, EditElement],
  inputs: ['data', 'designMode'],
  styleUrls: ['styles/floors/room.css'],
  template: `
    <div class="wrapper" resizable-element draggable-element
    [containment]="'#floor' + data.floorID" [attr.element-id]="data.elementID" [attr.data-id]="data.floorID"
      [class.reserved]="!designMode && !isAvailable">
      <div class="room" (click)="handleClick()">
        <div><span>{{ data.elementName }}</span></div>
        <a *ng-if="designMode" (click)="editElement()"><i class="fa fa-pencil"></i></a>
        <div *ng-if="!designMode && isAvailable">
          <div class="features pull-left">
            <span><i class="fa fa-user"></i> {{ data.capacity }}</span>
            <span><i class="fa fa-television" *ng-if="data.hasTV"></i></span>
          </div>
          <div class="book pull-right">
            <i class="fa fa-plus-square"></i>
          </div>
        </div>
        <div *ng-if="!designMode && !isAvailable" class="reserved">
          Reserved
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
  isAvailable: boolean;
  filter: any;
  reservationFilterObserver;

  constructor(private elementRef: ElementRef, private ReservationService: ReservationService,
      DesignService: DesignService, private FloorElementsService: FloorElementsService) {
    this.reservationFilterObserver = ReservationService.getReservationFilterObserver();
    this.reservationObserver = ReservationService.getObservable();
    this.isAvailable = true;
    this.designObservable = DesignService.getObservable();
    this.designMode = DesignService.designModeState;
  }

  startReservation() {
    if (this.isAvailable) {
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
    this.isAvailable = true;
    if (this.filter) {
      Observable.fromArray(this.reservations)
        .filter(res => {
          return moment.utc(res.reservationDate).diff(this.filter.reservationDate) >= 0;
        })
        .filter(res => {
          return moment.utc(res.reservationDate).diff(this.filter.reservationEndDate) < 0;
        })
        .filter(res => {
          return res.elementID === this.data.elementID;
        })
        .subscribe(res => {
          this.isAvailable = false;
        });
    }
  }

  handleClick() {
    if (!this.designMode) {
      this.startReservation();
    }
  }

  ngOnInit() {
    this.reservationFilterObserver.connect();
    this.reservations = this.ReservationService.reservations;
    this.filter = this.ReservationService.filter;
    this.checkAvailability();
    this.reservationFilterObserver
      .subscribe(res => {
        this.filter = this.ReservationService.filter;
        this.checkAvailability();
      });
    this.reservationObserver.connect();
    this.reservationObserver
      .subscribe(res => {
        if (res && res.type) {
          this.reservations = res.data;
          this.checkAvailability();
        }
      });
  }
}
