import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {UserService} from '../../services/UserService';
import {AppService} from '../../services/AppService';
import {CalendarService} from '../../services/CalendarService';

@Component({
  selector: 'accounts',
  styleUrls: ['styles/accounts.css'],
  template: `
    <loading-indicator *ngIf="isLoading"></loading-indicator>
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
    this.router.navigate(['ChangePassword']);
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
