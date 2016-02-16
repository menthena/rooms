System.register(['angular2/core', 'angular2/http', '../constants'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, constants_1;
    var CalendarService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            CalendarService = (function () {
                function CalendarService(http) {
                    this.http = http;
                    if (this.http._backend._browserXHR) {
                        var _build = this.http._backend._browserXHR.build;
                        this.http._backend._browserXHR.build = function () {
                            var _xhr = _build();
                            _xhr.withCredentials = true;
                            return _xhr;
                        };
                    }
                }
                CalendarService.prototype.addEvent = function (event) {
                    console.log('tick');
                };
                CalendarService.prototype.removeEvent = function (event) {
                    console.log('tick');
                };
                CalendarService.prototype.fetchCalendars = function () {
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
                };
                CalendarService.prototype.fetchEvents = function () {
                    this.authorize(function () {
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
                    });
                };
                CalendarService.prototype.saveGoogleToken = function (token) {
                    this.http.patch('/api/company', JSON.stringify({
                        googleToken: token
                    }), {
                        headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                    }).subscribe(function (res) {
                        console.log(res);
                    }, function (err) {
                        console.log(err);
                    });
                };
                CalendarService.prototype.authorize = function (callback) {
                    var _this = this;
                    if (gapi) {
                        gapi.auth.authorize({
                            client_id: constants_1.CLIENT_ID,
                            scope: constants_1.SCOPES,
                            immediate: false
                        }, function (res) {
                            _this.saveGoogleToken(res.access_token);
                            _this.loadCalendar();
                            callback(res);
                        });
                    }
                };
                CalendarService.prototype.loadCalendar = function () {
                    gapi.client.load('calendar', 'v3', function () {
                        console.log('tick');
                    });
                };
                CalendarService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CalendarService);
                return CalendarService;
            })();
            exports_1("CalendarService", CalendarService);
        }
    }
});

//# sourceMappingURL=CalendarService.js.map
