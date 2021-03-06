import {Component, OnInit, ElementRef, Input, Output, Injectable, ViewEncapsulation, EventEmitter} from '@angular/core';
import {IFloorElement} from '../services/FloorElementsService';
import {IReservation, ReservationService} from '../services/ReservationService';

declare var jQuery: any;

@Component({
  selector: 'popover',
  inputs: ['data', 'reservations', 'activeReservation'],
  // TODO:
  // outputs: ['editReservation'],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['styles/common/popover.css'],
  template: `
    <ng-content></ng-content>
    <div class="reservation-popover" [class.cancelling]="isCancelling">
      <div class="content">
        <i class="fa fa-check-square-o"></i> Reserved by you.
        <div class="controllers">
          <div><a (click)="handleEditReservation()"><i class="fa fa-pencil"></i> Edit</a></div>
          <div><a (click)="handleCancelReservation()"><i class="fa fa-trash"></i> Cancel</a></div>
          <!--div *ngIf="activeReservation && activeReservation.recurring">
            <a (click)="handleCancelReservation(true)"><i class="fa fa-bars"></i> Cancel all recurring</a>
          </div-->
        </div>
      </div>
      <!--div class="next-available">
        <div class="content">
          <span class="title">Next available</span>
          <div>
            <div class="time column">
              <span>12</span>
              <span class="colon">:</span>
              <span>30</span>
              <span class="am-pm">AM</span>
            </div>
            <div class="column">
              <a class="reserve-link"><i class="fa fa-plus"></i> Reserve</a>
            </div>
          </div>
        </div>
      </div-->
    </div>
  `
})

@Injectable()
export class Popover implements OnInit {
  @Input() data: IFloorElement;
  @Input() reservations: Array<IReservation>;
  @Input() activeReservation: IReservation;
  @Output() editReservation: any = new EventEmitter();
  isCancelling: boolean;

  constructor(private elementRef: ElementRef, private ReservationService: ReservationService) {}

  handleCancelReservation(recurring) {
    this.isCancelling = true;
    this.ReservationService.cancelReservation(this.activeReservation.reservationID, recurring)
      .add(() => {
        this.isCancelling = false;
      });
  }

  handleEditReservation() {
    this.editReservation
      .emit(this.activeReservation.reservationID);
  }

  ngOnInit() {
    // let nativeElement = this.elementRef.nativeElement;
    // console.log(jQuery(nativeElement).parent());
    // jQuery(nativeElement).popover({
    //   html: true,
    //   placement: 'bottom',
    //   delay: 50,
    //   trigger: 'hover',
    //   content: `
    //
    //   `
    // });

    // jQuery('.reservation-popover')
    //   .find('a')
    //   .on('click', () => {
    //     console.log('a');
    //   });
  }
};
