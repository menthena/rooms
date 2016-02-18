import {Component, OnInit} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';
import {UserService} from '../../services/UserService';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {ReservationService} from '../../services/ReservationService';

declare var _: any;

@Component({
  directives: [LoadingIndicator, RouterLink],
  selector: 'reservations',
  template: `
    <div class="container">
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
          <tr *ngFor="#reservation of reservations" [class.cancelling]="cancelling === reservation.reservationID">
            <td>{{ reservation.reservationDate }}</td>
            <td>{{ reservation.reservationEndDate }}</td>
            <td>{{ reservation.room }}</td>
            <td>{{ reservation.description }}</td>
            <td>
              <a (click)="cancelReservation(reservation.reservationID)">
                <i class="fa fa-times"></i> Cancel
              </a>
              <a (click)="cancelReservation(reservation.reservationID, true)" *ngIf="reservation.recurring">
                <i class="fa fa-times"></i> Cancel recurring
              </a>
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
      private UserService: UserService, private router: Router
    ) {
    this.isLoading = true;
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
