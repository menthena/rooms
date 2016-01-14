"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var UserService_1 = require('../../services/UserService');
var constants_1 = require('../../constants');
var Header = (function () {
    function Header(UserService) {
        this.UserService = UserService;
        this.userData = {};
    }
    Header.prototype.ngOnChanges = function () {
        if (this.UserService.userData) {
            this.userData = this.UserService.userData;
        }
    };
    Header.prototype.handleClick = function () {
        gapi.auth.authorize({
            client_id: constants_1.CLIENT_ID,
            scope: constants_1.SCOPES,
            immediate: false
        }, function (res) {
            gapi.client.load('calendar', 'v3', function () {
                var request = gapi.client.calendar.events.list({
                    'calendarId': 'primary',
                    'timeMin': (new Date()).toISOString(),
                    'showDeleted': false,
                    'singleEvents': true,
                    'maxResults': 10,
                    'orderBy': 'startTime'
                });
                request.execute(function (resp) {
                    var events = resp.items;
                    console.log('Upcoming events:');
                    if (events.length > 0) {
                        for (var i = 0; i < events.length; i++) {
                            var event = events[i];
                            var when = event.start.dateTime;
                            if (!when) {
                                when = event.start.date;
                            }
                            console.log(event.summary + ' (' + when + ')');
                        }
                    }
                    else {
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
                        { 'email': 'lpage@example.com' },
                        { 'email': 'sbrin@example.com' }
                    ],
                    'reminders': {
                        'useDefault': false,
                        'overrides': [
                            { 'method': 'email', 'minutes': 24 * 60 },
                            { 'method': 'popup', 'minutes': 10 }
                        ]
                    }
                };
                request = gapi.client.calendar.events.insert({
                    'calendarId': 'primary',
                    'resource': event
                });
                request.execute(function (event) {
                    console.log('Event created: ' + event.htmlLink);
                });
            });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Header.prototype, "logged", void 0);
    Header = __decorate([
        core_1.Component({
            selector: 'header',
            inputs: ['logged'],
            directives: [router_1.RouterLink],
            template: "\n  <header>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-3 col-xs-4\">\n          <a [routerLink]=\"['/Reserve']\" class=\"logo\">Rooms</a>\n        </div>\n        <div class=\"col-sm-6 hidden-xs\" *ngIf=\"logged\">\n          <ul class=\"list-inline\">\n            <li><a [routerLink]=\"['/Reserve']\">Reserve</a></li>\n            <li><a [routerLink]=\"['/Design']\">Design</a></li>\n            <li><a [routerLink]=\"['/Reservations']\">Reservations</a></li>\n            <li><a [routerLink]=\"['/Accounts']\">Account</a></li>\n          </ul>\n        </div>\n        <div class=\"col-sm-3 hidden-xs text-right\" *ngIf=\"logged\">\n          <span>{{ userData.name }}</span>\n          <a href=\"/oauth/logout\">Logout</a>\n        </div>\n        <div class=\"col-sm-9 hidden-xs text-right\" *ngIf=\"!logged\">\n          <ul class=\"list-inline\">\n            <li><a [routerLink]=\"['/Login']\">Login</a></li>\n            <li><a [routerLink]=\"['/Register']\">Register</a></li>\n          </ul>\n        </div>\n        <div class=\"col-xs-8 visible-xs text-right\">\n          <a href><i class=\"fa fa-bars\"></i> Menu</a>\n        </div>\n      </div>\n    </div>\n  </header>\n  ",
            styleUrls: ['styles/common/header.css']
        }), 
        __metadata('design:paramtypes', [UserService_1.UserService])
    ], Header);
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=header.js.map