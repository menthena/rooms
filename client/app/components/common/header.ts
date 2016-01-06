import {Component, Input} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {UserService} from '../../services/UserService';
import {CLIENT_ID, SCOPES} from '../../constants';

declare var gapi: any;

@Component({
  selector: 'header',
  inputs: ['logged'],
  directives: [RouterLink],
  template: `
  <header>
    <div class="container">
      <div class="row">
        <div class="col-sm-3 col-xs-4">
          <a [routerLink]="['/Reserve']" class="logo">Rooms</a>
        </div>
        <div class="col-sm-6 hidden-xs" *ngIf="logged">
          <ul class="list-inline">
            <li><a [routerLink]="['/Reserve']">Reserve</a></li>
            <li><a [routerLink]="['/Design']">Design</a></li>
            <li><a [routerLink]="['/Reservations']">My reservations</a></li>
            <li><a (click)="handleClick();">A</a></li>
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
  `,
  styleUrls: ['styles/common/header.css']
})

export class Header {
  @Input() logged: boolean;
  userData: Object;

  constructor(private UserService: UserService) {
    this.userData = {};
  }

  ngOnChanges() {
    if (this.UserService.userData) {
      this.userData = this.UserService.userData;
    }
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
