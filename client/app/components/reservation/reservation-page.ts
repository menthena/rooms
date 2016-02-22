import {Component, Output, EventEmitter} from '@angular/core';
import {Reserve} from './reservation';
import {AccountsPage} from '../accounts/accounts-page';
import {ReservationsPage} from '../reservations/reservations-page';
import {FilterModal} from './filter-modal';
import {Page, Modal, IONIC_DIRECTIVES, NavController} from 'ionic-framework/ionic';

@Page({
  directives: [Reserve],
  template: `
    <ion-tabs>
      <ion-tab tabTitle="Reserve" tabIcon="add-circle-outline"></ion-tab>
      <ion-tab tabTitle="Reservations" (select)="goToReservations()" tabIcon="bookmarks-outline"></ion-tab>
      <ion-tab tabTitle="Settings" (select)="goToAccounts()" tabIcon="settings-outline"></ion-tab>
    </ion-tabs>
    <ion-navbar *navbar>
      <ion-title>Reservation</ion-title>
      <ion-buttons end>
        <button (click)="showFilterModal()">
          Filter
        </button>
      </ion-buttons>
    </ion-navbar>

    <ion-content>
      <reserve></reserve>
    </ion-content>
  `
})

export class ReservationPage {
  constructor(private nav: NavController) {}

  showFilterModal() {
    let modal = Modal.create(FilterModal);
    this.nav.present(modal);
  }

  goToReservations() {
    this.nav.push(ReservationsPage);
  }
  goToAccounts() {
    this.nav.push(AccountsPage);
  }
}
