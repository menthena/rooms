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
import {FloorService} from './services/FloorService';
import {UserService} from './services/UserService';
import {DesignService} from './services/DesignService';
import {FloorElementsService} from './services/FloorElementsService';
import {ReservationService} from './services/ReservationService';

@Component({
  selector: 'rooms'
})

@View({
  encapsulation: ViewEncapsulation.None,
  directives: [RouterOutlet, Header, Overlay],
  template: `
  <overlay></overlay>
  <header></header>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['styles/base.css', 'styles/rooms.css']
})

@RouteConfig(APP_ROUTES)

class Room {
  constructor(private ReservationService: ReservationService) {}

  ngOnInit() {
    this.ReservationService.fetchReservations();
  }
}

bootstrap(Room, [FloorService, DesignService, UserService, FloorElementsService, ReservationService, HTTP_BINDINGS, ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})]);
