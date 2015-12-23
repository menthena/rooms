import {Component,   Input, OnInit,
  ElementRef, ViewEncapsulation} from 'angular2/core';
import {Validators, FormBuilder} from 'angular2/common';
import {Observable} from 'rxjs';
import {IFloorElement} from '../../services/FloorElementsService';
import {TimePicker} from '../form/time-picker';
import {DATE_ONLY_FORMAT} from '../../constants';
import {IReservation, ReservationService} from '../../services/ReservationService';
import * as moment from 'moment';

declare var jQuery: any;

@Component({
  selector: 'reservation-modal',
  directives: [  TimePicker],
  styleUrls: ['styles/reservation-modal.css'],
  encapsulation: ViewEncapsulation.None,
  inputs: ['data', 'formData', 'activeReservation'],
  template: `
    <div class="wrapper">
      <div class="booking" *ngIf="reserveID === data.elementID" [ngClass]="{'active': isActive, 'submitting': isSubmitting}">
        <form #reserveForm="ngForm" (submit)="submitReservationForm($event)">
          <div *ngIf="!activeReservation">
            <div class="heading">
              Booking room / {{ data.elementName }}
            </div>
            <div class="time">
              <div>
                <i class="fa fa-calendar"></i>
                <strong>{{ reservationDate }}</strong>
              </div>
              <div>
                <i class="fa fa-clock-o"></i>
                {{ reservationTime }}
              </div>
            </div>
          </div>

          <div *ngIf="activeReservation">
            <div class="heading">
              Edit reservation
            </div>

            <div class="row form-element">
              <div class="col-xs-4">
                <label for="from">From</label>
                <input type="hidden" id="from" name="from" ngControl="from" value="">
                <time-picker controlName="from" [formModel]="reserveForm" class-name="reservation-modal"></time-picker>
              </div>

              <div class="col-xs-4">
                <label for="to">To</label>
                <input type="hidden" id="to" name="to" ngControl="to" value="">
                <time-picker controlName="to" [formModel]="reserveForm" class-name="reservation-modal"></time-picker>
              </div>
            </div>


          </div>
          <div class="form-element">
            <label for="description">Description</label>
            <textarea name="description" ngControl="description" id="description" placeholder="Enter description..."></textarea>
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

export class ReservationModal implements OnInit {
  @Input() data: IFloorElement;
  @Input() activeReservation: IReservation;
  reserveID: string;
  isActive: boolean;
  isSubmitting: boolean;
  reserveForm: any;
  reservationDate: string;
  reservationTime: string;
  reservationObserver;
  reservationFilterObserver;

  constructor(private elementRef: ElementRef, private ReservationService: ReservationService, private fb: FormBuilder) {
    this.reservationFilterObserver = ReservationService.getReservationFilterObserver();
    this.reservationTime = ReservationService.reservationTime;
    this.reservationDate = this.ReservationService.filter.reservationDate.format(DATE_ONLY_FORMAT);
    this.reservationObserver = ReservationService.getObservable();
    this.isActive = false;
  }

  dismissBooking() {
    if (!this.isSubmitting) {
      this.isActive = false;
      setTimeout(() => {
        this.reservationObserver
          .subscription
          .next();
        this.reserveID = null;
      }, 200);
    }
  }

  submitReservationForm() {
    if (!this.isSubmitting) {
      this.isSubmitting = true;
      this.ReservationService.makeReservation(this.data.elementID, this.reserveForm.value.description)
        .add(() => {
          this.reservationObserver
            .subscription
            .next();
          this.isSubmitting = false;
        });
    }
  }

  ngOnChanges() {
    if (this.activeReservation) {
      let description = this.activeReservation.description;
      let reservationDate = moment.utc(this.activeReservation.reservationDate);
      let reservationEndDate = moment.utc(this.activeReservation.reservationEndDate);
      this.reserveForm = this.fb.group({
        description: [description],
        from: [reservationDate.format('h:mma')],
        to: [reservationEndDate.format('h:mma')]
      });
    } else {
      this.reserveForm = this.fb.group({
        description: [''],
        from: [''],
        to: ['']
      });
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
        this.reservationDate = this.ReservationService.filter.reservationDate.format(DATE_ONLY_FORMAT);
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
