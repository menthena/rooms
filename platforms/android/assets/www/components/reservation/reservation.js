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
var filter_1 = require('./filter');
var floors_1 = require('../floors/floors');
var DesignService_1 = require('../../services/DesignService');
var UserService_1 = require('../../services/UserService');
var ReservationService_1 = require('../../services/ReservationService');
var AppService_1 = require('../../services/AppService');
var Reserve = (function () {
    function Reserve(DesignService, ReservationService, UserService, router, AppService) {
        this.DesignService = DesignService;
        this.ReservationService = ReservationService;
        this.UserService = UserService;
        this.router = router;
        this.AppService = AppService;
        this.ReservationService.fetchReservations();
        this.DesignService.designModeState = false;
        this.reservationFilterObserver = ReservationService.getReservationFilterObserver();
        this.isIonic = this.AppService.isIonic;
        if (!this.UserService.isLogged) {
            this.router.navigate(['Login']);
        }
    }
    Reserve.prototype.getFormObj = function (formObj) {
        this.formObj = formObj;
        // TODO:
        this.reservationFilterObserver
            .subscription
            .next(this.formObj);
    };
    Reserve = __decorate([
        core_1.Component({
            directives: [filter_1.Filter, floors_1.Floors],
            selector: 'reserve',
            template: "\n    <div class=\"container\">\n      <div [ngClass]=\"{'row': !isIonic}\">\n        <div class=\"col-sm-3\" [ngClass]=\"{'hidden': isIonic}\">\n          <element-filter (form)=\"getFormObj($event)\"></element-filter>\n        </div>\n        <div [ngClass]=\"{'col-sm-9': !isIonic}\">\n          <floors></floors>\n        </div>\n      </div>\n    </div>\n  ",
            styleUrls: ['styles/reserve.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof DesignService_1.DesignService !== 'undefined' && DesignService_1.DesignService) === 'function' && _a) || Object, (typeof (_b = typeof ReservationService_1.ReservationService !== 'undefined' && ReservationService_1.ReservationService) === 'function' && _b) || Object, (typeof (_c = typeof UserService_1.UserService !== 'undefined' && UserService_1.UserService) === 'function' && _c) || Object, (typeof (_d = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _d) || Object, (typeof (_e = typeof AppService_1.AppService !== 'undefined' && AppService_1.AppService) === 'function' && _e) || Object])
    ], Reserve);
    return Reserve;
    var _a, _b, _c, _d, _e;
})();
exports.Reserve = Reserve;
//# sourceMappingURL=reservation.js.map
