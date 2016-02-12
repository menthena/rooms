System.register(['angular2/core', 'angular2/http', 'rxjs', './FloorElementsService', '../constants', '../app.config'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, rxjs_1, FloorElementsService_1, constants_1, app_config_1;
    var ReservationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            },
            function (FloorElementsService_1_1) {
                FloorElementsService_1 = FloorElementsService_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }],
        execute: function() {
            ReservationService = (function () {
                function ReservationService(http, FloorElementsService) {
                    var _this = this;
                    this.http = http;
                    this.filter = {
                        duration: 30,
                        capacity: 12,
                        features: [],
                        date: moment()
                    };
                    this.floorElementsObservable = FloorElementsService.getObservable();
                    this.floorElementsObservable.connect();
                    this.floorElementsObservable
                        .subscribe(function (res) {
                        console.log(res);
                    });
                    this.reservationObserver = rxjs_1.Observable
                        .create(function () {
                        return;
                    }).publish();
                    this.reservationFilterObserver = rxjs_1.Observable
                        .create(function () {
                        return;
                    }).publish();
                    this.reservationFilterObserver.connect();
                    this.reservationFilterObserver.subscribe(function (res) {
                        _this.saveFilter(res);
                    });
                }
                ReservationService.prototype.updateTime = function () {
                    this.filter.time = moment().add(10, 'minutes').format('h:mma');
                    return this.filter.time;
                };
                ReservationService.prototype.fetchReservations = function () {
                    var _this = this;
                    var observable = this.http.get(app_config_1.ENV_URL + '/api/reservation');
                    observable
                        .subscribe(function (res) {
                        var reservation = res.json();
                        _this.reservations = reservation.data;
                        if (_this.reservationObserver.subscription) {
                            _this.reservationObserver
                                .subscription
                                .next({
                                type: 'reservation',
                                data: _this.reservations
                            });
                        }
                    }, function (err) {
                        console.log(err);
                    });
                    return observable;
                };
                ReservationService.prototype.cancelReservation = function (reservationID, recurring) {
                    var _this = this;
                    var observable = this.http.delete(app_config_1.ENV_URL + '/api/reservation/' + reservationID + '?recurring=' + recurring);
                    var subscription = observable
                        .subscribe(function (res) {
                        var reservation = res.json();
                        _this.reservations = reservation.data;
                        if (_this.reservationObserver.subscription) {
                            _this.reservationObserver
                                .subscription
                                .next({
                                type: 'reservation',
                                data: _this.reservations
                            });
                        }
                    }, function (err) {
                        console.log(err);
                    });
                    return subscription;
                };
                ReservationService.prototype.makeReservation = function (reservation) {
                    var _this = this;
                    this.floorElementsObservable.subscription.next({ type: 'loading' });
                    this.filter = _.extend(this.filter, reservation);
                    console.log(this.filter, reservation);
                    var observable = this.http.post(app_config_1.ENV_URL + '/api/reservation', JSON.stringify(this.filter), {
                        headers: new http_1.Headers({ 'Content-Type': 'application/json' })
                    });
                    var subscription = observable
                        .delay(400)
                        .subscribe(function (res) {
                        var data = res.json().data;
                        _this.floorElementsObservable.subscription.next({
                            type: 'reservation',
                            data: data
                        });
                    });
                    return subscription;
                };
                ReservationService.prototype.transformFilter = function (filter) {
                    var filterDate = moment(filter.date + ' ' + filter.time, constants_1.DATE_FORMAT);
                    return {
                        reservationDate: filterDate,
                        reservationEndDate: moment(filterDate).add(filter.duration, 'minutes'),
                        capacity: filter.capacity,
                        features: filter.features,
                        time: filter.time,
                        date: moment(filter.date, constants_1.DATE_FORMAT)
                    };
                };
                ReservationService.prototype.saveFilter = function (filter) {
                    if (filter) {
                        this.filter = this.transformFilter(filter);
                        if (filter.time) {
                            this.reservationTime = filter.time + ' - ' +
                                moment(filter.date + ' ' + filter.time, constants_1.DATE_FORMAT)
                                    .add(filter.duration, 'minutes').format('h:mma');
                        }
                    }
                };
                ReservationService.prototype.getReservationFilterObserver = function () {
                    return this.reservationFilterObserver;
                };
                ReservationService.prototype.getObservable = function () {
                    return this.reservationObserver;
                };
                ReservationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, FloorElementsService_1.FloorElementsService])
                ], ReservationService);
                return ReservationService;
            })();
            exports_1("ReservationService", ReservationService);
        }
    }
});

//# sourceMappingURL=ReservationService.js.map
