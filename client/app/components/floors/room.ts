import {Component, Input, OnInit, ElementRef, Observable} from 'angular2/angular2';
import {IFloorElement} from '../../services/FloorElementsService';
import {ReservationService} from '../../services/ReservationService';
import {Reservation} from '../reservation/reservation';

declare var jQuery:any;

@Component({
  selector: 'room',
  directives: [Reservation],
  inputs: ['data'],
  styleUrls: ['styles/floors/room.css'],
  template: `
    <div class="room-wrapper">
      <div class="room" (click)="startReservation()">
        <span>Sharlands</span>
        <div class="features pull-left">
          <span><i class="fa fa-user"></i> 12</span>
          <span><i class="fa fa-television"></i></span>
        </div>
        <div class="book pull-right">
          <i class="fa fa-plus-square"></i>
        </div>
      </div>
      <reservation [data]="data"></reservation>
    </div>
  `
})

export class Room implements OnInit {
  @Input() data: IFloorElement;
  reservationObserver;

  constructor(private elementRef: ElementRef, ReservationService: ReservationService) {
    this.reservationObserver = ReservationService.getObservable();
  }

  startReservation() {
    this.reservationObserver
      .subscription
      .next(this.data.elementID);
  }

  onInit() {
    this.reservationObserver.connect();

    let nativeElement = this.elementRef.nativeElement;
    let roomElement = jQuery(nativeElement).find('.room-wrapper');
    jQuery(roomElement).css({
      width: this.data.elementWidth + '%',
      left: this.data.elementPositionX + '%',
      top: this.data.elementPositionY + '%'
    });
  }
}
