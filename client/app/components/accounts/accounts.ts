import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {UserService} from '../../services/UserService';

@Component({
  selector: 'accounts',
  directives: [LoadingIndicator],
  styleUrls: ['styles/accounts.css'],
  template: `
    <loading-indicator *ngIf="isLoading"></loading-indicator>
    <div *ngIf="!isLoading">
      <h1>Accounts</h1>
      <div class="row">
        <div class="col-xs-3">
          Name
        </div>
        <div class="col-xs-3">
          {{ userData.name }}
        </div>
        <div class="col-xs-3">
          Email
        </div>
        <div class="col-xs-3">
          {{ userData.email }}
        </div>
      </div>
    </div>
  `
})

export class Accounts {
  userData;
  isLoading: boolean;

  constructor(private UserService: UserService, private router: Router) {
    this.isLoading = true;
    if (!this.UserService.isLogged) {
      this.router.navigate(['Login']);
    }
  }

  ngOnInit() {
    this.userData = this.UserService.userData;
    setTimeout(() => {
      this.isLoading = false;
    }, 250);
  }
}
