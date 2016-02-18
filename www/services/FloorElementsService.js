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
var rxjs_1 = require('rxjs');
var http_1 = require('angular2/http');
var app_config_1 = require('../config/app.config');
var FloorElementsService = (function () {
    function FloorElementsService(http) {
        this.http = http;
        this.floorElements = new Array();
        this.floorElementsObservable = rxjs_1.Observable
            .create(function (observer) {
            return function () { return console.log('disposed'); };
        }).publish();
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
    FloorElementsService.prototype.getObservable = function () {
        return this.floorElementsObservable;
    };
    FloorElementsService.prototype.editElement = function (elementID, element) {
        var _this = this;
        this.floorElementsObservable.subscription.next({ type: 'loading' });
        this.http.patch(app_config_1.ENV_URL + '/api/floor/' + element.floorID + '/elements/' + elementID, JSON.stringify(element), {
            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
        })
            .delay(300)
            .subscribe(function (res) {
            var floorElement = res.json().data;
            var index = _.findIndex(_this.floorElements, { elementID: elementID });
            _this.floorElements[index] = floorElement;
            _this.floorElementsObservable.subscription.next({
                type: 'data',
                data: _this.floorElements
            });
        }, function (err) {
            console.log(err);
        });
    };
    FloorElementsService.prototype.addElement = function (element) {
        var _this = this;
        this.floorElementsObservable.subscription.next({ type: 'loading' });
        this.http.post(app_config_1.ENV_URL + '/api/floor/' + element.floorID + '/elements', JSON.stringify(element), {
            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
        })
            .delay(400)
            .subscribe(function (res) {
            var floorElement = res.json().data;
            _this.floorElements.push(floorElement);
            _this.floorElementsObservable.subscription.next({
                type: 'data',
                data: _this.floorElements
            });
        }, function (err) {
            console.log(err);
        });
    };
    FloorElementsService.prototype.deleteElement = function (floorID, elementID) {
        var _this = this;
        this.floorElementsObservable.subscription.next({ type: 'loading' });
        this.http.delete(app_config_1.ENV_URL + '/api/floor/' + floorID + '/elements/' + elementID, {
            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
        })
            .delay(400)
            .subscribe(function (res) {
            _.remove(_this.floorElements, function (element) {
                return String(element.elementID) === String(elementID);
            });
            _this.floorElementsObservable.subscription.next({
                type: 'data',
                data: _this.floorElements
            });
        }, function (err) {
            console.log(err);
        });
    };
    FloorElementsService.prototype.fetchElementsByFloorID = function (floorID) {
        var _this = this;
        var observable = this.http.get(app_config_1.ENV_URL + '/api/floor/' + floorID + '/elements');
        observable.subscribe(function (res) {
            var elementsJson = res.json();
            _this.floorElements = elementsJson.data;
        }, function (err) {
            console.log(err);
        });
        return observable;
    };
    FloorElementsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], FloorElementsService);
    return FloorElementsService;
    var _a;
})();
exports.FloorElementsService = FloorElementsService;
//# sourceMappingURL=FloorElementsService.js.map
