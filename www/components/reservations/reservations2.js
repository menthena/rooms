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
var loading_indicator_1 = require('../../directives/loading-indicator');
var ReservationService_1 = require('../../services/ReservationService');
var Reservations = (function () {
    function Reservations(ReservationService, UserService, router) {
        this.ReservationService = ReservationService;
        this.UserService = UserService;
        this.router = router;
        this.reservations = [];
        this.isLoading = true;
        if (!this.UserService.isLogged) {
            this.router.navigate(['Login']);
        }
    }
    Reservations.prototype.ngOnInit = function () {
        var _this = this;
        this.ReservationService.fetchReservations()
            .delay(250)
            .subscribe(function (res) {
            _this.isLoading = false;
            var reservations = res.json().data;
            _this.reservations = reservations;
        });
    };
    Reservations.prototype.cancelReservation = function (reservationID, recurring) {
        var _this = this;
        this.cancelling = reservationID;
        this.ReservationService.cancelReservation(reservationID, recurring)
            .add(function () {
            setTimeout(function () {
                _this.cancelling = null;
                _.remove(_this.reservations, { reservationID: reservationID });
            }, 400);
        });
    };
    Reservations = __decorate([
        core_1.Component({
            directives: [loading_indicator_1.LoadingIndicator, router_1.RouterLink],
            selector: 'reservations',
            template: "\n    <div class=\"container\">\n      <loading-indicator *ngIf=\"isLoading\"></loading-indicator>\n      <div class=\"no-reservation text-center\" *ngIf=\"!isLoading && reservations.length === 0\">\n        <div>\n          You have no reservations coming up.\n        </div>\n        <a [routerLink]=\"['/Reserve']\">Reserve a room</a>\n      </div>\n      <div *ngIf=\"reservations.length > 0\">\n        <h1>Upcoming reservations</h1>\n        <table class=\"table\">\n          <tr>\n            <th>Date</th>\n            <th>Ends</th>\n            <th>Room</th>\n            <th>Description</th>\n            <th>Actions</th>\n          <tr>\n          <tr *ngFor=\"#reservation of reservations\" [class.cancelling]=\"cancelling === reservation.reservationID\">\n            <td>{{ reservation.reservationDate }}</td>\n            <td>{{ reservation.reservationEndDate }}</td>\n            <td>{{ reservation.room }}</td>\n            <td>{{ reservation.description }}</td>\n            <td>\n              <a (click)=\"cancelReservation(reservation.reservationID)\">\n                <i class=\"fa fa-times\"></i> Cancel\n              </a>\n              <a (click)=\"cancelReservation(reservation.reservationID, true)\" *ngIf=\"reservation.recurring\">\n                <i class=\"fa fa-times\"></i> Cancel recurring\n              </a>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  ",
            styleUrls: ['styles/reservations.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ReservationService_1.ReservationService !== 'undefined' && ReservationService_1.ReservationService) === 'function' && _a) || Object, (typeof (_b = typeof UserService_1.UserService !== 'undefined' && UserService_1.UserService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
    ], Reservations);
    return Reservations;
    var _a, _b, _c;
})();
exports.Reservations = Reservations;
//# sourceMappingURL=reservations2.js.map
