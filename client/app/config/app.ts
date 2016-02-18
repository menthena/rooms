/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
import {Component, ViewEncapsulation, View, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_BINDINGS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouterOutlet, RouteConfig, Router, Location, Route} from 'angular2/router';
import {APP_ROUTES} from './routes';
import {Header} from '../components/common/header';
import {Overlay} from '../components/common/overlay';
import {AppwideOverlay} from '../components/common/appwide-overlay';
import {FloorService} from '../services/FloorService';
import {UserService} from '../services/UserService';
import {AppService} from '../services/AppService';
import {DesignService} from '../services/DesignService';
import {CalendarService} from '../services/CalendarService';
import {FloorElementsService} from '../services/FloorElementsService';
import {ReservationService} from '../services/ReservationService';
import {UserValidators} from '../validators/UserValidators';
import {App, Platform} from 'ionic-framework/ionic';

@RouteConfig(APP_ROUTES)

@App({
  viewProviders: [AppService],
  providers: [FloorService, DesignService, UserValidators, UserService,
    FloorElementsService, ReservationService, HTTP_BINDINGS, ROUTER_PROVIDERS, CalendarService,
    provide(LocationStrategy, {useClass: HashLocationStrategy})],
  directives: [RouterOutlet, Header, Overlay, AppwideOverlay],
  template: `
  <appwide-overlay></appwide-overlay>
  <overlay></overlay>
  <header [logged]="isLogged"></header>
  <router-outlet></router-outlet>
  `
})

class Room {
  isLogged: boolean;
  userObservable;

  constructor(private UserService: UserService) {
    this.userObservable = this.UserService.getUserObservable();
    this.userObservable.connect();
  }

  ngOnInit() {
    this.UserService.getUser();
    this.userObservable
      .subscribe(() => {
        this.isLogged = this.UserService.isLogged;
      });
  }

}
