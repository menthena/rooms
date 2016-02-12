System.register(['angular2/core', 'angular2/router', './filter', '../floors/floors', '../../services/DesignService', '../../services/UserService', '../../services/ReservationService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, filter_1, floors_1, DesignService_1, UserService_1, ReservationService_1;
    var Reserve;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (filter_1_1) {
                filter_1 = filter_1_1;
            },
            function (floors_1_1) {
                floors_1 = floors_1_1;
            },
            function (DesignService_1_1) {
                DesignService_1 = DesignService_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            },
            function (ReservationService_1_1) {
                ReservationService_1 = ReservationService_1_1;
            }],
        execute: function() {
            Reserve = (function () {
                function Reserve(DesignService, ReservationService, UserService, router) {
                    this.DesignService = DesignService;
                    this.ReservationService = ReservationService;
                    this.UserService = UserService;
                    this.router = router;
                    this.ReservationService.fetchReservations();
                    this.DesignService.designModeState = false;
                    this.reservationFilterObserver = ReservationService.getReservationFilterObserver();
                    if (!this.UserService.isLogged) {
                        this.router.navigate(['Login']);
                    }
                }
                Reserve.prototype.getFormObj = function (formObj) {
                    this.formObj = formObj;
                };
                Reserve = __decorate([
                    core_1.Component({
                        directives: [filter_1.Filter, floors_1.Floors],
                        selector: 'reserve',
                        template: "\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <element-filter (form)=\"getFormObj($event)\"></element-filter>\n        </div>\n        <div class=\"col-sm-9\">\n          <floors></floors>\n        </div>\n      </div>\n    </div>\n  ",
                        styleUrls: ['styles/reserve.css']
                    }), 
                    __metadata('design:paramtypes', [DesignService_1.DesignService, ReservationService_1.ReservationService, UserService_1.UserService, router_1.Router])
                ], Reserve);
                return Reserve;
            })();
            exports_1("Reserve", Reserve);
        }
    }
});

//# sourceMappingURL=reservation.js.map
