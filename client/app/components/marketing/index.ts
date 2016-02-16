import {Component} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-framework/ionic';
import {AppService} from '../../services/AppService';
import {RouterLink, Router} from 'angular2/router';

@Component({
  selector: 'marketing-index',
  providers: [AppService],
  styleUrls: ['styles/marketing.css'],
  template: `
  <div *ngIf="isIonic">
    <ion-slides pager loop="true" autoplay="true">
      <ion-slide class="slide-1">
        <div class="logo">Rooms</div>
        <h2>A quick way to reserve rooms</h2>
        <a [routerLink]="['/Register']">
          <button light outline>Register now</button>
        </a>
        <div class="or">
          or kindly login by clicking <a [routerLink]="['/Login']">here</a>
        </div>
      </ion-slide>

      <ion-slide class="slide-2">
        <div class="icons">
          <i class="fa fa-tablet"></i> <i class="fa fa-desktop"></i> <i class="fa fa-mobile"></i>
        </div>
        <h2>Real-time reservation</h2>
        <p>Reserve a room on any platform and will be reflected to every user's UI.</p>
      </ion-slide>

      <ion-slide class="slide-3">
        <div class="icons">
          <i class="fa fa-repeat"></i> <i class="fa fa-calendar-o"></i>
        </div>
        <h2>Recurring reservations</h2>
        <p>You can reserve a room daily or weekly basis. </p>
      </ion-slide>
    </ion-slides>
  </div>
  <div *ngIf="!isIonic">
    <div class="hero">
      <div class="green-bar">
        <div class="logo">Rooms</div>
        <h2>A quick way to reserve rooms</h2>
        <a [routerLink]="['/Register']">
          <button light outline>Register now</button>
        </a>
        <div class="or">
          or kindly login by clicking <a [routerLink]="['/Login']">here</a>
        </div>
      </div>
    </div>
    <footer>
      Copyright © 2016
    </footer>
  </div>
`,
  directives: [RouterLink, IONIC_DIRECTIVES]
})

export class MarketingIndex {
  isIonic: boolean;
  constructor(private AppService: AppService) {
    this.isIonic = this.AppService.isIonic;
  }
}
