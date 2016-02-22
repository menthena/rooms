import {Component} from '@angular/core';
import {FormBuilder, NgForm, Validators, Control} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {EMAIL_REGEX} from '../../config/constants';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {UserService} from '../../services/UserService';
import {AppService} from '../../services/AppService';
import {Register} from './register';
import {Page, IONIC_DIRECTIVES} from 'ionic-framework/ionic';

@Page({
  directives: [Register],
  template: `
    <ion-navbar *navbar>
      <ion-title>Register</ion-title>
    </ion-navbar>

    <ion-content>
      <register></register>
    </ion-content>
  `
})

export class RegisterPage {
}
