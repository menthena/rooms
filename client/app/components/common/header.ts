import {Component, Input} from 'angular2/core';
import {RouterLink, Router, Location} from 'angular2/router';
import {UserService} from '../../services/UserService';
import {CLIENT_ID, SCOPES} from '../../constants';
import {IONIC_DIRECTIVES, NavController, Modal} from 'ionic-framework/ionic';
import {AppService} from '../../services/AppService';
import {Filter} from '../reservation/filter';

declare var gapi: any;

@Component({
  selector: 'header',
  inputs: ['logged'],
  directives: [RouterLink, IONIC_DIRECTIVES],
  template: `
  <div *ngIf="isIonic && currentRoute !== 'index'">
  <br><br>
    <a (click)="qeqwq()">asdafa ae faf eaf<br>aeijeajf aijefij aef<br><br>aiefjiaefjiaea</a>

    <ion-tabs>
      <ion-tab tabIcon="water" tabTitle="Water" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="leaf" tabTitle="Life" [root]="tab2"></ion-tab>
      <ion-tab tabIcon="flame" tabTitle="Fire" [root]="tab3"></ion-tab>
      <ion-tab tabIcon="magnet" tabTitle="Force" [root]="tab4"></ion-tab>
    </ion-tabs>
  </div>

  <header *ngIf="!isIonic && currentRoute !== 'index' && currentRoute !== ''">
    <div class="container">
      <div class="row">
        <div class="col-sm-3 col-xs-4">
          <a [routerLink]="['/Reserve']" class="logo">Rooms</a>
        </div>
        <div class="col-sm-6 hidden-xs" *ngIf="logged">
          <ul class="list-inline">
            <li><a [routerLink]="['/Reserve']">Reserve</a></li>
            <li><a [routerLink]="['/Design']">Design</a></li>
            <li><a [routerLink]="['/Reservations']">Reservations</a></li>
            <li><a [routerLink]="['/Accounts']">Account</a></li>
          </ul>
        </div>
        <div class="col-sm-3 hidden-xs text-right" *ngIf="logged">
          <span>{{ userData.name }}</span>
          <a href="/oauth/logout">Logout</a>
        </div>
        <div class="col-sm-9 hidden-xs text-right" *ngIf="!logged">
          <ul class="list-inline">
            <li><a [routerLink]="['/Login']">Login</a></li>
            <li><a [routerLink]="['/Register']">Register</a></li>
          </ul>
        </div>
        <div class="col-xs-8 visible-xs text-right">
          <a href><i class="fa fa-bars"></i> Menu</a>
        </div>
      </div>
    </div>
  </header>
  <ion-menu [content]="content">
     <ion-toolbar>
       <ion-title>Pages</ion-title>
     </ion-toolbar>
     <ion-content>
       <ion-list>
         <button ion-item (click)="openPage(loginPage)">
           Login
         </button>
         <button ion-item (click)="openPage(signupPage)">
           Signup
         </button>
       </ion-list>
     </ion-content>
   </ion-menu>
  `,
  styleUrls: ['styles/common/header.css']
})

export class Header {
  @Input() logged: boolean;
  isIonic: boolean;
  userData: Object;
  currentRoute: string;
  nav: NavController;

  constructor(private UserService: UserService, private AppService: AppService, private Router: Router,
      private Location: Location) {
    this.currentRoute = this.Location.path().substring(1);
    this.Router.subscribe((route) => {
      this.currentRoute = route;
    });
    this.userData = {};
    this.isIonic = this.AppService.isIonic;
  }

  ngOnChanges() {
    if (this.UserService.userData) {
      this.userData = this.UserService.userData;
    }
  }

  qeqwq() {
    console.log('aaa');
    alert('a');
    // let myModal = Modal.create(Filter);
    // this.nav.present(myModal);
  }

  handleClick() {
    gapi.auth.authorize({
      client_id: CLIENT_ID,
      scope: SCOPES,
      immediate: false
    },
      (res) => {
        gapi.client.load('calendar', 'v3', () => {
          var request = gapi.client.calendar.events.list({
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
          });

          request.execute(function(resp) {
            var events = resp.items;
            console.log('Upcoming events:');

            if (events.length > 0) {
              for (let i = 0; i < events.length; i++) {
                var event = events[i];
                var when = event.start.dateTime;
                if (!when) {
                  when = event.start.date;
                }
                console.log(event.summary + ' (' + when + ')');
              }
            } else {
              console.log('No upcoming events found.');
            }

          });

          var event = {
            'summary': 'Google I/O 2015',
            'location': '800 Howard St., San Francisco, CA 94103',
            'description': 'A chance to hear more about Google\'s developer products.',
            'start': {
              'dateTime': '2015-05-28T09:00:00-07:00',
              'timeZone': 'America/Los_Angeles'
            },
            'end': {
              'dateTime': '2015-05-28T17:00:00-07:00',
              'timeZone': 'America/Los_Angeles'
            },
            'recurrence': [
              'RRULE:FREQ=DAILY;COUNT=2'
            ],
            'attendees': [
              {'email': 'lpage@example.com'},
              {'email': 'sbrin@example.com'}
            ],
            'reminders': {
              'useDefault': false,
              'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10}
              ]
            }
          };

          request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
          });

          request.execute(function(event) {
            console.log('Event created: ' + event.htmlLink);
          });

        });

      });
  }
}
