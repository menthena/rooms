System.register(['angular2/core', 'angular2/http', 'angular2/router', './routes', './components/common/header', './components/common/overlay', './components/common/appwide-overlay', './services/FloorService', './services/UserService', './services/AppService', './services/DesignService', './services/CalendarService', './services/FloorElementsService', './services/ReservationService', './validators/UserValidators', 'ionic-framework/ionic'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, router_2, routes_1, header_1, overlay_1, appwide_overlay_1, FloorService_1, UserService_1, AppService_1, DesignService_1, CalendarService_1, FloorElementsService_1, ReservationService_1, UserValidators_1, ionic_1;
    var Room;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (overlay_1_1) {
                overlay_1 = overlay_1_1;
            },
            function (appwide_overlay_1_1) {
                appwide_overlay_1 = appwide_overlay_1_1;
            },
            function (FloorService_1_1) {
                FloorService_1 = FloorService_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            },
            function (AppService_1_1) {
                AppService_1 = AppService_1_1;
            },
            function (DesignService_1_1) {
                DesignService_1 = DesignService_1_1;
            },
            function (CalendarService_1_1) {
                CalendarService_1 = CalendarService_1_1;
            },
            function (FloorElementsService_1_1) {
                FloorElementsService_1 = FloorElementsService_1_1;
            },
            function (ReservationService_1_1) {
                ReservationService_1 = ReservationService_1_1;
            },
            function (UserValidators_1_1) {
                UserValidators_1 = UserValidators_1_1;
            },
            function (ionic_1_1) {
                ionic_1 = ionic_1_1;
            }],
        execute: function() {
            Room = (function () {
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
                        providers: [FloorService_1.FloorService, DesignService_1.DesignService, AppService_1.AppService, UserValidators_1.UserValidators, UserService_1.UserService,
                            FloorElementsService_1.FloorElementsService, ReservationService_1.ReservationService, http_1.HTTP_BINDINGS, router_1.ROUTER_PROVIDERS, CalendarService_1.CalendarService,
                            core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })],
                        directives: [router_2.RouterOutlet, header_1.Header, overlay_1.Overlay, appwide_overlay_1.AppwideOverlay],
                        template: "\n  <appwide-overlay></appwide-overlay>\n  <overlay></overlay>\n  <header [logged]=\"isLogged\"></header>\n  <router-outlet></router-outlet>\n  "
                    }), 
                    __metadata('design:paramtypes', [UserService_1.UserService])
                ], Room);
                return Room;
            })();
        }
    }
});

//# sourceMappingURL=app.js.map
