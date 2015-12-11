import {Component, NgIf, NgClass, Input, OnInit, Observable, ElementRef, Validators, FormBuilder} from 'angular2/angular2';
import {IFloorElement} from '../../services/FloorElementsService';
import {ReservationService} from '../../services/ReservationService';

declare var jQuery: any;

@Component({
  selector: 'reservation-modal',
  directives: [NgIf, NgClass],
  styleUrls: ['styles/reservation-modal.css'],
  inputs: ['data', 'formData'],
  template: `
    <div class="wrapper">
      <div class="booking" *ng-if="reserveID === data.elementID" [ng-class]="{'active': isActive, 'submitting': isSubmitting}">
        <form [ng-form-model]="reserveForm" (submit)="submitReservationForm($event)">
          <div class="heading">
            Booking room / {{ data.elementName }}
          </div>

          <div class="time">
            <i class="fa fa-clock-o"></i>
            {{ reservationTime }}
          </div>

          <div class="form">
            <label for="description">Description</label>
            <textarea name="description" ng-control="description" id="description" placeholder="Enter description..."></textarea>
          </div>

          <div class="buttons">
            <a (click)="dismissBooking()"><i class="fa fa-times"></i></a>
            <a (click)="submitReservationForm()"><i class="fa fa-check"></i></a>
          </div>
        </form>
      </div>
    </div>
  `
})

export class ReservationModal {
  @Input() data: IFloorElement;
  reserveID: string;
  isActive: boolean;
  isSubmitting: boolean;
  reserveForm: any;
  reservationTime: string;
  reservationObserver;
  reservationFilterObserver;

  constructor(private elementRef: ElementRef, private ReservationService: ReservationService, fb: FormBuilder) {
    this.reservationFilterObserver = ReservationService.getReservationFilterObserver();
    this.reservationTime = ReservationService.reservationTime;
    this.reservationObserver = ReservationService.getObservable();
    this.isActive = false;
    this.reserveForm = fb.group({
      description: ['']
    });
  }

  dismissBooking() {
    if (!this.isSubmitting) {
      this.isActive = false;
      setTimeout(() => {
        this.reserveID = null;
      }, 200);
    }
  }

  submitReservationForm() {
    if (!this.isSubmitting) {
      this.isSubmitting = true;
      this.ReservationService.makeReservation(this.data.elementID, this.reserveForm.value.description);
    }
  }

  ngOnInit() {
    this.reservationObserver
      .delay(50)
      .subscribe(() => {
        this.isActive = true;
      });
    this.reservationFilterObserver
      .subscribe(() => {
        this.reservationTime = this.ReservationService.reservationTime;
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
