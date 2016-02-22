import {Component, Optional} from '@angular/core';
import {AppService} from '../../services/AppService';
import {RouterLink, Router} from '@angular/router';
import {LoginPage} from '../user/login-page';
import {RegisterPage} from '../user/register-page';

@Component({
  selector: 'marketing-index',
  styleUrls: ['styles/marketing.css'],
  template: `
  <div *ngIf="!isIonic">
    <div class="hero">
      <div class="green-bar">
        <div class="logo">Rooms</div>
        <h2>A quick way to reserve rooms</h2>
        <a [routerLink]="['/register']" class="btn">
          Register now
        </a>
        <div class="or">
          or kindly login by clicking <a [routerLink]="['/login']">here</a>
        </div>
      </div>
    </div>
    <footer>
      Copyright © 2016
    </footer>
  </div>
`
})

export class MarketingIndex {
  isIonic: boolean;
  isAndroid: boolean;
  sliderOptions: any;

  constructor(private AppService: AppService) {
    this.isIonic = this.AppService.isIonic;
    this.isAndroid = this.AppService.isAndroid;
    this.sliderOptions = {
      loop: true
    };
  }

}
