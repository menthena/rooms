import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouterOutlet, RouteConfig, Router, Location, Route} from 'angular2/router';
import {APP_ROUTES} from './routes';
import {Header} from './components/common/header';

@Component({
  selector: 'rooms'
})

@View({
  directives: [RouterOutlet, Header],
  template: `
  <header></header>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['styles/rooms.css']
})

@RouteConfig(APP_ROUTES)

class Room { }

bootstrap(Room, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
