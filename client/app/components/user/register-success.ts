import {Component} from 'angular2/core';
import {FormBuilder, NgForm, Validators, Control} from 'angular2/common';
import {Router, RouterLink} from 'angular2/router';
import {EMAIL_REGEX} from '../../config/constants';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {UserValidators} from '../../validators/UserValidators';
import {UserService} from '../../services/UserService';

@Component({
  selector: 'login',
  styleUrls: ['styles/common/generic-success.css'],
  template: `
  <div class="generic-success">
    <div class="header">
      Successfully registered!
    </div>

    <div class="white-bg">
      <p>Thank you, {{ user.name }}</p>
      <p>We have bla bla</p>
      <p><a href>abc</a></p>
    </div>
  </div>
  `
})

export class RegisterSuccess {
  user: Object;
  obc: Object;

  constructor(private router: Router, private UserService: UserService) {
    this.user = {};
  }

  ngOnInit() {
    this.UserService.getUser()
      .add(() => {
        let data = this.UserService.userData;
        this.user = data;
      });
  }

}
