import {Component, NgIf, NgClass, Input, OnInit, Observable, ElementRef, Validators, FormBuilder, Form} from 'angular2/angular2';
import {IFloorElement} from '../../services/FloorElementsService';
import {ReservationService} from '../../services/ReservationService';

declare var jQuery: any;

@Component({
  selector: 'reservation',
  directives: [NgIf, NgClass],
  styleUrls: ['styles/booking.css'],
  inputs: ['data'],
  template: `
    <div class="booking" *ng-if="reserveID === data.elementID" [ng-class]="{active: isActive, submitting: isSubmitting}">
      <form [ng-form-model]="reserveForm" (submit)="submitreserveForm($event)">
        <div class="heading">
          Booking room / {{ data.elementName }}
        </div>

        <div class="time">
          <i class="fa fa-clock-o"></i>
          12:30 - 13:30
        </div>

        <div class="form">
          <label for="description">Description</label>
          <textarea name="description" ng-control="description" id="description" placeholder="Enter description..."></textarea>
        </div>

        <div class="buttons">
          <a (click)="dismissBooking()"><i class="fa fa-times"></i></a>
          <a (click)="submitreserveForm()"><i class="fa fa-check"></i></a>
        </div>
      </form>
    </div>
  `
})

export class Reservation {
  @Input() data: IFloorElement;
  reserveID: string;
  isActive: boolean;
  isSubmitting: boolean;
  reserveForm: any;
  reservationObserver;

  constructor(private elementRef: ElementRef, ReservationService: ReservationService, fb: FormBuilder) {
    this.reservationObserver = ReservationService.getObservable();
    this.isActive = false;
    this.reserveForm = fb.group({
      description: ['']
    });
  }

  dismissBooking() {
    if (!this.isSubmitting) {
      this.reservationObserver
        .subscription.next();
    }
  }

  submitreserveForm() {
    if (!this.isSubmitting) {
      this.isSubmitting = true;

    }
  }

  onInit() {
    this.reservationObserver
      .delay(50)
      .subscribe(() => {
        this.isActive = true;
      });
    this.reservationObserver
      .subscribe(
        res => {
          this.isActive = false;
          this.reserveID = res;
        }
      );
  }
}
