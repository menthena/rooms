/// <reference path="../../typings/tsd.d.ts" />
import 'reflect-metadata';
import {Component, ViewEncapsulation, View, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_BINDINGS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouterOutlet, RouteConfig, Router, Location, Route} from 'angular2/router';
import {APP_ROUTES} from './routes';
import {Header} from './components/common/header';
import {Overlay} from './components/common/overlay';
import {AppwideOverlay} from './components/common/appwide-overlay';
import {FloorService} from './services/FloorService';
import {UserService} from './services/UserService';
import {AppService} from './services/AppService';
import {DesignService} from './services/DesignService';
import {FloorElementsService} from './services/FloorElementsService';
import {ReservationService} from './services/ReservationService';
import {UserValidators} from './validators/UserValidators';

@Component({
  selector: 'rooms'
})

@View({
  encapsulation: ViewEncapsulation.None,
  directives: [RouterOutlet, Header, Overlay, AppwideOverlay],
  template: `
  <appwide-overlay></appwide-overlay>
  <overlay></overlay>
  <header [logged]="isLogged"></header>
  <router-outlet (loggedChange)="handleLoggedChange($event)"></router-outlet>
  `,
  styleUrls: ['styles/base.css', 'styles/rooms.css']
})

@RouteConfig(APP_ROUTES)

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

  handleLoggedChange() {
    console.log('tick');
  }
}

bootstrap(Room, [FloorService, DesignService, AppService, UserValidators, UserService,
  FloorElementsService, ReservationService, HTTP_BINDINGS, ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})]);
