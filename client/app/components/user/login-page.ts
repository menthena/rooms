import {Component, Output, EventEmitter} from '@angular/core';
import {Login} from './login';
import {Page, IONIC_DIRECTIVES} from 'ionic-framework/ionic';

@Page({
  directives: [Login],
  template: `
    <ion-navbar *navbar>
      <ion-title>Login</ion-title>
    </ion-navbar>

    <ion-content>
      <login></login>
    </ion-content>
  `
})

export class LoginPage {
}
