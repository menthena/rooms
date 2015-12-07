import {Component, Attribute, NgIf, Input, OnInit, ElementRef, Observable} from 'angular2/angular2';
import {IFloorElement} from '../../services/FloorElementsService';
import {ReservationService} from '../../services/ReservationService';
import {Resizable} from '../../directives/resizable';
import {Draggable} from '../../directives/draggable';
import {DesignService} from '../../services/DesignService';

declare var jQuery:any;

@Component({
  selector: 'room',
  directives: [NgIf, Resizable, Draggable],
  inputs: ['data', 'designMode'],
  styleUrls: ['styles/floors/room.css'],
  template: `
    <div class="wrapper" resizable-element draggable-element [attr.element-id]="data.elementID">
      <div class="room" (click)="startReservation()">
        <div><span>{{ data.elementName }}</span></div>
        <div class="features pull-left" *ng-if="!designMode">
          <span><i class="fa fa-user"></i> {{ data.capacity }}</span>
          <span><i class="fa fa-television" *ng-if="data.hasTV"></i></span>
        </div>
        <div class="book pull-right" *ng-if="!designMode">
          <i class="fa fa-plus-square"></i>
        </div>
      </div>
    </div>
  `
})

export class Room implements OnInit {
  @Input() data: IFloorElement;
  designMode: boolean;
  reservationObserver;

  constructor(private elementRef: ElementRef, ReservationService: ReservationService, DesignService: DesignService) {
    this.reservationObserver = ReservationService.getObservable();
    this.designMode = DesignService.designModeState;
  }

  startReservation() {
    this.reservationObserver
      .subscription
      .next(this.data.elementID);
  }

  ngOnInit() {
    this.reservationObserver.connect();
  }
}
