import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs';
import {Http, Response, Headers} from 'angular2/http';
import {CLIENT_ID, SCOPES} from '../constants';

declare var gapi: any;

interface ICalendarService {
  saveGoogleToken(token: String);
  authorize(callback: Function);
  loadCalendar();
  fetchCalendars();
  fetchEvents();
  addEvent(event: Object);
  removeEvent(event: Object);
}

@Injectable()
export class CalendarService implements ICalendarService {

  constructor(private http: Http) {
  }

  addEvent(event) {
    console.log('tick');
  }

  removeEvent(event) {
    console.log('tick');
  }

  fetchCalendars() {
    var request = gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    });

    request.execute((resp) => {
      var events = resp.items;
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
  }

  fetchEvents() {
    this.authorize(() => {
      var request = gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
      });

      request.execute((resp) => {
        var events = resp.items;
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
    });
  }


  saveGoogleToken(token) {
    this.http.patch('/api/company', JSON.stringify({
      googleToken: token
    }), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    }).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

  authorize(callback: Function) {
    if (gapi) {
      gapi.auth.authorize({
        client_id: CLIENT_ID,
        scope: SCOPES,
        immediate: false
      }, (res) => {
        this.saveGoogleToken(res.access_token);
        this.loadCalendar();
        callback(res);
      });
    }
  }

  loadCalendar() {
    gapi.client.load('calendar', 'v3', () => {
      console.log('tick');
    });
  }

}
