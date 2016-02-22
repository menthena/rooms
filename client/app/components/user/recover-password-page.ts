import {Component, Output, EventEmitter} from '@angular/core';
import {RecoverPassword} from './recover-password';
import {Page, IONIC_DIRECTIVES} from 'ionic-framework/ionic';

@Page({
  directives: [RecoverPassword],
  template: `
    <ion-navbar *navbar>
      <ion-title>Recover password</ion-title>
    </ion-navbar>

    <ion-content>
      <recover-password></recover-password>
    </ion-content>
  `
})

export class RecoverPasswordPage {
}
