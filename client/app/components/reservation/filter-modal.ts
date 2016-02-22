import {Component, Output, EventEmitter} from '@angular/core';
import {Filter} from './filter';
import {Page, IONIC_DIRECTIVES, ViewController} from 'ionic-framework/ionic';

@Page({
  directives: [Filter],
  template: `
  <ion-toolbar class="android-attr">
    <ion-title>
      Filter
    </ion-title>
    <ion-buttons end>
      <button (click)="dismiss()">
        <span primary showWhen="ios">Dismiss</span>
        <ion-icon name='close' showWhen="android"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>


  <ion-content class="has-header">

    <element-filter></element-filter>

  </ion-content>

  `
})

export class FilterModal {
  constructor(private viewController: ViewController) {}
  dismiss() {
    this.viewController.dismiss();
  }
}
