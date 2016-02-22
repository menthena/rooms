import {Component} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {UserService} from '../../services/UserService';
import {AppService} from '../../services/AppService';
import {CalendarService} from '../../services/CalendarService';
import {IONIC_DIRECTIVES} from 'ionic-framework/ionic';

@Component({
  selector: 'accounts',
  providers: [],
  directives: [LoadingIndicator, RouterLink, IONIC_DIRECTIVES],
  styleUrls: ['styles/accounts.css'],
  template: `
    <loading-indicator *ngIf="isLoading"></loading-indicator>
    <div *ngIf="!isLoading" class="container">
      <div *ngIf="isIonic">
        <ion-list>
          <ion-item>
            <ion-row>
              <ion-col>Name</ion-col>
              <ion-col text-right><b>{{ userData.name }}</b></ion-col>
            </ion-row>
          </ion-item>
          <ion-item>
            <ion-row>
              <ion-col>Company</ion-col>
              <ion-col text-right><b>{{ userData.companyName }}</b></ion-col>
            </ion-row>
          </ion-item>
          <ion-item>
            <ion-row>
              <ion-col>Password</ion-col>
              <ion-col text-right><b>******</b></ion-col>
            </ion-row>
          </ion-item>
          <ion-item>
            <ion-row>
              <ion-col>Email</ion-col>
              <ion-col text-right><b>{{ userData.email }}</b></ion-col>
            </ion-row>
          </ion-item>
          <ion-item>
            <ion-label>Google Calendar Integrate</ion-label>
            <ion-toggle checked="false"></ion-toggle>
          </ion-item>
        </ion-list>
      </div>
      <div *ngIf="!isIonic">
        <h1>
          Accounts
        </h1>
        <div class="account-info">
          <div class="row">
            <div class="col-md-2 name">
              Name
            </div>
            <div class="col-md-3" [attr.id]="'userName'">
              {{ userData.name }}
            </div>
            <div class="col-md-1">
            </div>
            <div class="col-md-2 name">
              Company
            </div>
            <div class="col-md-3">
              {{ userData.companyName }}
            </div>
            <div class="col-md-1">
            </div>
          </div>
          <div class="row">
            <div class="col-md-2 name">
              Password
            </div>
            <div class="col-md-3">
              ******* [<a (click)="goToChangePassword()">Change</a>]
            </div>
            <div class="col-md-1">
            </div>
            <div class="col-md-2 name">
              Email
            </div>
            <div class="col-md-3">
              {{ userData.email }}
            </div>
            <div class="col-md-1">
            </div>
          </div>
        </div>
        <h1>
          Calendar
        </h1>
        <div class="account-info">
          <div>
            <div *ngIf="userData.googleToken">
              Integrated with Google
            </div>
            <div *ngIf="!userData.googleToken">
              <a (click)="integrateWithGoogle()">Integrate with google</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  `
})

export class Accounts {
  userData;
  isLoading: boolean;
  isIonic: boolean;
  isLogged: boolean;

  constructor(private UserService: UserService, private router: Router,
    private CalendarService: CalendarService, private AppService: AppService
  ) {
    this.isIonic = this.AppService.isIonic;
    this.isLoading = true;
    this.isLogged = this.UserService.isLogged;
    this.userData = this.UserService.userData;
  }

  integrateWithGoogle() {
    this.CalendarService.authorize((res) => {
      if (res) {
        this.userData.googleToken = res.googleToken;
      }
    });
  }

  goToChangePassword() {
    // [routerLink]="['/ChangePassword']"
  }

  ngOnInit() {
    // this.CalendarService.fetchCalendars();
    if (!this.isLogged) {
      this.router.navigate(['Login']);
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 250);
  }
}
