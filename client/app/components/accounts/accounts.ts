import {Component} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {UserService} from '../../services/UserService';
import {CalendarService} from '../../services/CalendarService';

@Component({
  selector: 'accounts',
  directives: [LoadingIndicator, RouterLink],
  styleUrls: ['styles/accounts.css'],
  template: `
    <loading-indicator *ngIf="isLoading"></loading-indicator>
    <div *ngIf="!isLoading" class="container">
      <h1>
        Accounts
      </h1>
      <div class="account-info">
        <div class="row">
          <div class="col-xs-2 name">
            Name
          </div>
          <div class="col-xs-3">
            {{ userData.name }}
          </div>
          <div class="col-xs-1">
          </div>
          <div class="col-xs-2 name">
            Company
          </div>
          <div class="col-xs-3">
            {{ userData.companyName }}
          </div>
          <div class="col-xs-1">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2 name">
            Password
          </div>
          <div class="col-xs-3">
            ******* [<a [routerLink]="['/ChangePassword']">Change</a>]
          </div>
          <div class="col-xs-1">
          </div>
          <div class="col-xs-2 name">
            Email
          </div>
          <div class="col-xs-3">
            {{ userData.email }}
          </div>
          <div class="col-xs-1">
          </div>
        </div>
      </div>
      <h1>
        Google Integration
      </h1>
      <div class="account-info">
        <div *ngIf="userData.googleToken">
          Integrated with Google
        </div>
        <div *ngIf="!userData.googleToken">
          <a (click)="integrateWithGoogle()">Integrate with google</a>
        </div>
      </div>
    </div>
  `
})

export class Accounts {
  userData;
  isLoading: boolean;

  constructor(private UserService: UserService, private router: Router,
    private CalendarService: CalendarService
  ) {
    this.isLoading = true;
    if (!this.UserService.isLogged) {
      this.router.navigate(['Login']);
    }
  }

  integrateWithGoogle() {
    this.CalendarService.authorize((res) => {
      if (res) {
        this.userData.googleToken = res.googleToken;
      }
    });
  }

  ngOnInit() {
    // this.CalendarService.fetchCalendars();
    this.userData = this.UserService.userData;
    setTimeout(() => {
      this.isLoading = false;
    }, 250);
  }
}
