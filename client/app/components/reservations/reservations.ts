import {Component, OnInit} from '@angular/core';
import {DATE_FORMAT} from '../../config/constants';
import {Router, RouterLink} from '@angular/router';
import {UserService} from '../../services/UserService';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {ReservationService} from '../../services/ReservationService';
import {AppService} from '../../services/AppService';

declare var _: any;
declare var moment: any;

@Component({
  selector: 'reservations',
  template: `
    <div class="container" *ngIf="!isIonic">
      <loading-indicator *ngIf="isLoading"></loading-indicator>
      <div class="no-reservation text-center" *ngIf="!isLoading && reservations.length === 0">
        <div>
          You have no reservations coming up.
        </div>
        <a [routerLink]="['/Reserve']">Reserve a room</a>
      </div>
      <div *ngIf="reservations.length > 0">
        <h1>Upcoming reservations</h1>
        <table class="table">
          <tr>
            <th>Date</th>
            <th>Ends</th>
            <th>Room</th>
            <th>Description</th>
            <th>Actions</th>
          <tr>
          <tr *ngFor="let reservation of reservations" [class.cancelling]="cancelling === reservation.reservationID">
            <td>{{ parseDate(reservation.reservationDate) }}</td>
            <td>{{ parseDate(reservation.reservationEndDate) }}</td>
            <td>{{ reservation.room }}</td>
            <td>{{ reservation.description }}</td>
            <td>
              <a (click)="cancelReservation(reservation.reservationID)">
                <i class="fa fa-times"></i> Cancel
              </a>
              <!--a (click)="cancelReservation(reservation.reservationID, true)" *ngIf="reservation.recurring">
                <i class="fa fa-times"></i> Cancel recurring
              </a-->
            </td>
          </tr>
        </table>
      </div>
    </div>
  `,
  styleUrls: ['styles/reservations.css']
})

export class Reservations {
  reservations = [];
  isLoading: boolean;
  cancelling: string;

  constructor(private ReservationService: ReservationService,
      private UserService: UserService, private router: Router,
      private AppService: AppService
    ) {
    this.isLoading = true;
    this.isIonic = this.AppService.isIonic;
    if (!this.UserService.isLogged) {
      this.router.navigate(['Login']);
    }
  }

  ngOnInit() {
    this.ReservationService.fetchReservations()
      .delay(250)
      .subscribe((res) => {
        this.isLoading = false;
        let reservations = res.json().data;
        this.reservations = reservations;
      });

  }

  parseDate(date) {
    return moment.utc(date).format(DATE_FORMAT);
  }

  cancelReservation(reservationID, recurring) {
    this.cancelling = reservationID;
    this.ReservationService.cancelReservation(reservationID, recurring)
      .add(() => {
        setTimeout(() => {
          this.cancelling = null;
          _.remove(this.reservations, { reservationID: reservationID });
        }, 400);
      });
  }

}
