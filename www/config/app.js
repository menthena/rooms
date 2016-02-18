var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var routes_1 = require('./routes');
var header_1 = require('../components/common/header');
var overlay_1 = require('../components/common/overlay');
var appwide_overlay_1 = require('../components/common/appwide-overlay');
var FloorService_1 = require('../services/FloorService');
var UserService_1 = require('../services/UserService');
var AppService_1 = require('../services/AppService');
var DesignService_1 = require('../services/DesignService');
var CalendarService_1 = require('../services/CalendarService');
var FloorElementsService_1 = require('../services/FloorElementsService');
var ReservationService_1 = require('../services/ReservationService');
var UserValidators_1 = require('../validators/UserValidators');
var ionic_1 = require('ionic-framework/ionic');
var Room = (function () {
    function Room(UserService) {
        this.UserService = UserService;
        this.userObservable = this.UserService.getUserObservable();
        this.userObservable.connect();
    }
    Room.prototype.ngOnInit = function () {
        var _this = this;
        this.UserService.getUser();
        this.userObservable
            .subscribe(function () {
            _this.isLogged = _this.UserService.isLogged;
        });
    };
    Room = __decorate([
        router_2.RouteConfig(routes_1.APP_ROUTES),
        ionic_1.App({
            viewProviders: [AppService_1.AppService],
            providers: [FloorService_1.FloorService, DesignService_1.DesignService, UserValidators_1.UserValidators, UserService_1.UserService,
                FloorElementsService_1.FloorElementsService, ReservationService_1.ReservationService, http_1.HTTP_BINDINGS, router_1.ROUTER_PROVIDERS, CalendarService_1.CalendarService,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })],
            directives: [router_2.RouterOutlet, header_1.Header, overlay_1.Overlay, appwide_overlay_1.AppwideOverlay],
            template: "\n  <appwide-overlay></appwide-overlay>\n  <overlay></overlay>\n  <header [logged]=\"isLogged\"></header>\n  <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof UserService_1.UserService !== 'undefined' && UserService_1.UserService) === 'function' && _a) || Object])
    ], Room);
    return Room;
    var _a;
})();
//# sourceMappingURL=app.js.map
