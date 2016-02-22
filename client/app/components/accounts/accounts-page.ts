import {Component, Output, EventEmitter} from '@angular/core';
import {ReservationPage} from '../reservation/reservation-page';
import {ReservationsPage} from '../reservations/reservations-page';
import {Accounts} from './accounts';
import {Page, Modal, IONIC_DIRECTIVES, NavController} from 'ionic-framework/ionic';

@Page({
  directives: [Accounts],
  template: `
    <ion-tabs preloadTabs="false" selectedIndex="2">
      <ion-tab tabTitle="Reserve" (select)="goToReservation()" tabIcon="add-circle-outline"></ion-tab>
      <ion-tab tabTitle="Reservations" (select)="goToReservations()" tabIcon="bookmarks-outline"></ion-tab>
      <ion-tab tabTitle="Settings" tabIcon="settings-outline"></ion-tab>
    </ion-tabs>
    <ion-navbar *navbar>
      <ion-title>Settings</ion-title>
    </ion-navbar>

    <ion-content>
      <accounts></accounts>
    </ion-content>
  `
})

export class AccountsPage {
  constructor(private nav: NavController) {}

  goToReservations() {
    this.nav.push(ReservationsPage);
  }

  goToReservation() {
    this.nav.push(ReservationPage);
  }
}
