System.register(['angular2/core', 'angular2/router', '../../services/UserService', '../../constants', 'ionic-framework/ionic', '../../services/AppService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, UserService_1, constants_1, ionic_1, AppService_1;
    var Header;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (ionic_1_1) {
                ionic_1 = ionic_1_1;
            },
            function (AppService_1_1) {
                AppService_1 = AppService_1_1;
            }],
        execute: function() {
            Header = (function () {
                function Header(UserService, AppService, Router) {
                    var _this = this;
                    this.UserService = UserService;
                    this.AppService = AppService;
                    this.Router = Router;
                    this.Router.subscribe(function (route) {
                        _this.currentRoute = route;
                    });
                    this.userData = {};
                    this.isIonic = this.AppService.isIonic;
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
                        directives: [router_1.RouterLink, ionic_1.IONIC_DIRECTIVES],
                        template: "\n  <header *ngIf=\"isIonic && currentRoute !== 'index'\">\n    <ion-tabs>\n      <ion-tab tabIcon=\"water\" tabTitle=\"Water\" [root]=\"tab1\"></ion-tab>\n      <ion-tab tabIcon=\"leaf\" tabTitle=\"Life\" [root]=\"tab2\"></ion-tab>\n      <ion-tab tabIcon=\"flame\" tabTitle=\"Fire\" [root]=\"tab3\"></ion-tab>\n      <ion-tab tabIcon=\"magnet\" tabTitle=\"Force\" [root]=\"tab4\"></ion-tab>\n    </ion-tabs>\n  </header>\n\n  <header *ngIf=\"!isIonic && currentRoute !== 'index'\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-3 col-xs-4\">\n          <a [routerLink]=\"['/Reserve']\" class=\"logo\">Rooms</a>\n        </div>\n        <div class=\"col-sm-6 hidden-xs\" *ngIf=\"logged\">\n          <ul class=\"list-inline\">\n            <li><a [routerLink]=\"['/Reserve']\">Reserve</a></li>\n            <li><a [routerLink]=\"['/Design']\">Design</a></li>\n            <li><a [routerLink]=\"['/Reservations']\">Reservations</a></li>\n            <li><a [routerLink]=\"['/Accounts']\">Account</a></li>\n          </ul>\n        </div>\n        <div class=\"col-sm-3 hidden-xs text-right\" *ngIf=\"logged\">\n          <span>{{ userData.name }}</span>\n          <a href=\"/oauth/logout\">Logout</a>\n        </div>\n        <div class=\"col-sm-9 hidden-xs text-right\" *ngIf=\"!logged\">\n          <ul class=\"list-inline\">\n            <li><a [routerLink]=\"['/Login']\">Login</a></li>\n            <li><a [routerLink]=\"['/Register']\">Register</a></li>\n          </ul>\n        </div>\n        <div class=\"col-xs-8 visible-xs text-right\">\n          <a href><i class=\"fa fa-bars\"></i> Menu</a>\n        </div>\n      </div>\n    </div>\n  </header>\n  <ion-menu [content]=\"content\">\n     <ion-toolbar>\n       <ion-title>Pages</ion-title>\n     </ion-toolbar>\n     <ion-content>\n       <ion-list>\n         <button ion-item (click)=\"openPage(loginPage)\">\n           Login\n         </button>\n         <button ion-item (click)=\"openPage(signupPage)\">\n           Signup\n         </button>\n       </ion-list>\n     </ion-content>\n   </ion-menu>\n  ",
                        styleUrls: ['styles/common/header.css']
                    }), 
                    __metadata('design:paramtypes', [UserService_1.UserService, AppService_1.AppService, router_1.Router])
                ], Header);
                return Header;
            })();
            exports_1("Header", Header);
        }
    }
});

//# sourceMappingURL=header.js.map
