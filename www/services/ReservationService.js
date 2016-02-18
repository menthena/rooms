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
var http_1 = require('angular2/http');
var rxjs_1 = require('rxjs');
var FloorElementsService_1 = require('./FloorElementsService');
var constants_1 = require('../config/constants');
var app_config_1 = require('../config/app.config');
var ReservationService = (function () {
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
        // TODO: Use official Angular2 CORS support when merged (https://github.com/angular/angular/issues/4231).
        if (this.http._backend._browserXHR) {
            var _build = this.http._backend._browserXHR.build;
            this.http._backend._browserXHR.build = function () {
                var _xhr = _build();
                _xhr.withCredentials = true;
                return _xhr;
            };
        }
    }
    ReservationService.prototype.updateTime = function () {
        this.filter.time = moment().add(10, 'minutes').format('h:mma');
        return this.filter.time;
    };
    ReservationService.prototype.fetchReservations = function () {
        var _this = this;
        var observable = this.http.get(app_config_1.ENV_URL + '/api/reservation', {
            headers: new http_1.Headers({ Authorization: 'Basic ' + window.btoa('asd@asd.com:asdasd') })
        });
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
                // TODO: Refactor
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
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof FloorElementsService_1.FloorElementsService !== 'undefined' && FloorElementsService_1.FloorElementsService) === 'function' && _b) || Object])
    ], ReservationService);
    return ReservationService;
    var _a, _b;
})();
exports.ReservationService = ReservationService;
//# sourceMappingURL=ReservationService.js.map
