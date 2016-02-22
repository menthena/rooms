import { NgModule, Component }      from '@angular/core';
import { HttpModule }      from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routing } from './routes';
import {Header} from '../components/common/header';
import {MarketingIndex} from '../components/marketing/index';
import {Reserve} from '../components/reservation/reservation';
import {ReservationModal} from '../components/reservation/reservation-modal';
import {Design} from '../components/design/design';
import {Accounts} from '../components/accounts/accounts';
import {Floors} from '../components/floors/floors';
import {Floor} from '../components/floors/floor';
import {Room} from '../components/floors/room';
import {Placeholder} from '../components/floors/placeholder';
import {Icon} from '../components/floors/icon';
import {Line} from '../components/floors/line';
import {Register} from '../components/user/register';
import {RegisterSuccess} from '../components/user/register-success';
import {ChangePassword} from '../components/user/change-password';
import {ResetPassword} from '../components/user/reset-password';
import {RecoverPassword} from '../components/user/recover-password';
import {Login} from '../components/user/login';
import {Reservations} from '../components/reservations/reservations';
import {FloorService} from '../services/FloorService';
import {UserService} from '../services/UserService';
import {AppService} from '../services/AppService';
import {DesignService} from '../services/DesignService';
import {CalendarService} from '../services/CalendarService';
import {FloorElementsService} from '../services/FloorElementsService';
import {ReservationService} from '../services/ReservationService';
import {UserValidators} from '../validators/UserValidators';
import {LoadingIndicator} from '../directives/loading-indicator';
import {Overlay} from '../components/common/overlay';
import {AppwideOverlay} from '../components/common/appwide-overlay';
import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule, FormsModule,
                  ReactiveFormsModule, routing ],
  providers:    [ AppService, ReservationService, FloorService, UserService,
                  DesignService, CalendarService, FloorElementsService,
                  UserValidators,
                  {provide: LocationStrategy, useClass: HashLocationStrategy} ],
  declarations: [ AppComponent, MarketingIndex, Header, Overlay, AppwideOverlay,
                  Reserve, Design, Register, ChangePassword, ResetPassword, Login,
                  RecoverPassword, Reservations, LoadingIndicator,
                  RegisterSuccess, Accounts, Floors, Floor, Room, Placeholder,
                  Icon, Line, ReservationModal],
  bootstrap:    [ AppComponent ]
})

export class RoomsModule { }
//
//
// /// <reference path="../../../typings/tsd.d.ts" />
// /// <reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
// import {Component, ViewEncapsulation, View, provide, enableProdMode} from '@angular/core';
// import {bootstrap} from 'angular2/platform/browser';
// import {HTTP_BINDINGS} from '@angular/http';
// import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from '@angular/router';
// import {ROUTER_DIRECTIVES, RouterOutlet, RouteConfig, Router, Location, Route} from '@angular/router';
// import {APP_ROUTES} from './routes';
// import {Header} from '../components/common/header';
// import {Overlay} from '../components/common/overlay';
// import {AppwideOverlay} from '../components/common/appwide-overlay';
// import {FloorService} from '../services/FloorService';
// import {UserService} from '../services/UserService';
// import {AppService} from '../services/AppService';
// import {DesignService} from '../services/DesignService';
// import {CalendarService} from '../services/CalendarService';
// import {FloorElementsService} from '../services/FloorElementsService';
// import {ReservationService} from '../services/ReservationService';
// import {UserValidators} from '../validators/UserValidators';
// import {App, Platform, NavController} from 'ionic-framework/ionic';
//
// enableProdMode();
// @RouteConfig(APP_ROUTES)
//
//
// class Room {
//   isLogged: boolean;
//   userObservable;
//   isIonic: boolean = false;
//
//   constructor(private UserService: UserService, private AppService: AppService) {
//     this.userObservable = this.UserService.getUserObservable();
//     this.userObservable.connect();
//     this.isIonic = this.AppService.isIonic;
//   }
//
//   ngOnInit() {
//     this.UserService.getUser();
//     this.userObservable
//       .subscribe(() => {
//         this.isLogged = this.UserService.isLogged;
//       });
//   }
//
// }
