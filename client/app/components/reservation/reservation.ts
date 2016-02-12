import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs';
import {Filter} from './filter';
import {Floors} from '../floors/floors';
import {DesignService} from '../../services/DesignService';
import {UserService} from '../../services/UserService';
import {ReservationService} from '../../services/ReservationService';

@Component({
  directives: [Filter, Floors],
  selector: 'reserve',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <element-filter (form)="getFormObj($event)"></element-filter>
        </div>
        <div class="col-sm-9">
          <floors></floors>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['styles/reserve.css']
})

export class Reserve {
  formObj: Object;
  reservationFilterObserver: any;

  constructor(private DesignService: DesignService, private ReservationService: ReservationService,
    private UserService: UserService, private router: Router
    ) {
    this.ReservationService.fetchReservations();
    this.DesignService.designModeState = false;
    this.reservationFilterObserver = ReservationService.getReservationFilterObserver();
    if (!this.UserService.isLogged) {
      this.router.navigate(['Login']);
    }
  }

  getFormObj(formObj) {
    this.formObj = formObj;
    // TODO:
    this.reservationFilterObserver
      .subscription
      .next(this.formObj);
  }
}
