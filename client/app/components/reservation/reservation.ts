import {Component, OnInit, Optional} from 'angular2/core';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs';
import {Filter} from './filter';
import {Floors} from '../floors/floors';
import {DesignService} from '../../services/DesignService';
import {UserService} from '../../services/UserService';
import {ReservationService} from '../../services/ReservationService';
import {AppService} from '../../services/AppService';
import {IONIC_DIRECTIVES, Page, Modal, NavController} from 'ionic-framework/ionic';

@Page({
  template: ` <ion-navbar *navbar>
      <ion-title>Other Page</ion-title>
    </ion-navbar>

    <ion-content>I'm the other page!</ion-content>`
})
class P {}

@Component({
  directives: [Filter, Floors, IONIC_DIRECTIVES],
  selector: 'reserve',
  template: `
    <ion-toolbar *ngIf="isIonic">
      <button menuToggle (click)="toggleFilter()">
        <ion-icon name='menu'></ion-icon>
      </button>
      <ion-title>Reservation</ion-title>
    </ion-toolbar>
    <div [class.container]="!isIonic">
      <div [ngClass]="{'row': !isIonic}">
        <div class="col-sm-3" [ngClass]="{'hidden': isIonic}">
          <element-filter (form)="getFormObj($event)"></element-filter>
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
    private UserService: UserService, private router: Router, private AppService: AppService,
    @Optional() private nav: NavController
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
    this.nav.push(P);
  }

  getFormObj(formObj) {
    this.formObj = formObj;
    // TODO:
    this.reservationFilterObserver
      .subscription
      .next(this.formObj);
  }
}
