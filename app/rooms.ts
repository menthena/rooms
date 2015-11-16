import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterLink, RouterOutlet} from 'angular2/router';
import {APP_ROUTES} from './routes';
import {Header} from './components/common/Header';

@Component({
  selector: 'rooms'
})

@View({
  directives: [RouterLink, RouterOutlet, Header],
  template: `<Header />`,
  styleUrls: ['styles/rooms.css']
})

@RouteConfig(APP_ROUTES)

class Room { }

bootstrap(Room);
