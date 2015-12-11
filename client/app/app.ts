/// <reference path="../../typings/tsd.d.ts" />
import {Component, ViewEncapsulation, View, bootstrap, provide} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouterOutlet, RouteConfig, Router, Location, Route} from 'angular2/router';
import {APP_ROUTES} from './routes';
import {Header} from './components/common/header';
import {Overlay} from './components/common/overlay';
import {FloorService} from './services/FloorService';
import {DesignService} from './services/DesignService';
import {FloorElementsService} from './services/FloorElementsService';
import {ReservationService} from './services/ReservationService';

@Component({
  selector: 'rooms'
})

@View({
  encapsulation: ViewEncapsulation.None,
  directives: [RouterOutlet, Header],
  template: `
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

bootstrap(Room, [FloorService, DesignService, FloorElementsService, ReservationService, HTTP_BINDINGS, ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})]);
