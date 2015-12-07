import {Component} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'header',
  directives: [RouterLink],
  template: `
  <header>
    <div class="container">
      <div class="row">
        <div class="col-sm-3 col-xs-4">
          <a [router-link]="['/Reserve']" class="logo">Rooms</a>
        </div>
        <div class="col-sm-6 hidden-xs">
          <ul class="list-inline">
            <li><a [router-link]="['/Reserve']">Reserve</a></li>
            <li><a [router-link]="['/Design']">Design</a></li>
            <li><a href>My bookings</a></li>
          </ul>
        </div>
        <div class="col-sm-3 hidden-xs text-right">
          <span>Menthena</span>
          <a href>Logout</a>
        </div>
        <div class="col-xs-8 visible-xs text-right">
          <a href><i class="fa fa-bars"></i> Menu</a>
        </div>
      </div>
    </div>
  </header>
  `,
  styleUrls: ['styles/common/header.css']
})

export class Header {}
