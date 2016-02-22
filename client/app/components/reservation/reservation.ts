import {Component, OnInit, Optional} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {Filter} from './filter';
import {Floors} from '../floors/floors';
import {DesignService} from '../../services/DesignService';
import {UserService} from '../../services/UserService';
import {ReservationService} from '../../services/ReservationService';
import {AppService} from '../../services/AppService';

declare var PushNotification: any;

@Component({
  directives: [Filter, Floors],
  selector: 'reserve',
  template: `
    <div [class.container]="!isIonic">
      <div [ngClass]="{'row': !isIonic}">
        <div class="col-sm-3" [ngClass]="{'hidden': isIonic}">
          <!--element-filter (form)="getFormObj($event)"></element-filter-->
        </div>
        <div [ngClass]="{'col-sm-9': !isIonic}">
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
  isIonic: boolean;

  constructor(private DesignService: DesignService, private ReservationService: ReservationService,
    private UserService: UserService, private router: Router, private AppService: AppService
    ) {
    this.ReservationService.fetchReservations();
    this.DesignService.designModeState = false;
    this.reservationFilterObserver = ReservationService.getReservationFilterObserver();
    this.isIonic = this.AppService.isIonic;
    if (!this.UserService.isLogged) {
      this.router.navigate(['Login']);
    }
  }

  toggleFilter() {
    // let modal = Modal.create(P);
  }

  getFormObj(formObj) {
    this.formObj = formObj;
    // TODO:
    this.reservationFilterObserver
      .subscription
      .next(this.formObj);
  }
}
