import {Component} from '@angular/core';
import {FormBuilder, NgForm, Validators, Control} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
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
      <p>Your company is fully registered, your colleagues can now register from the link below</p>
      <p><a href="/#/register/{{ user.companyID }}">Register link</a></p>
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
