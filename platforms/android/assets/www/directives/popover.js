System.register(['angular2/core', '../services/ReservationService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ReservationService_1;
    var Popover;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ReservationService_1_1) {
                ReservationService_1 = ReservationService_1_1;
            }],
        execute: function() {
            Popover = (function () {
                function Popover(elementRef, ReservationService) {
                    this.elementRef = elementRef;
                    this.ReservationService = ReservationService;
                    this.editReservation = new core_1.EventEmitter();
                }
                Popover.prototype.handleCancelReservation = function (recurring) {
                    var _this = this;
                    this.isCancelling = true;
                    this.ReservationService.cancelReservation(this.activeReservation.reservationID, recurring)
                        .add(function () {
                        _this.isCancelling = false;
                    });
                };
                Popover.prototype.handleEditReservation = function () {
                    this.editReservation
                        .emit(this.activeReservation.reservationID);
                };
                Popover.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Popover.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Popover.prototype, "reservations", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Popover.prototype, "activeReservation", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Popover.prototype, "editReservation", void 0);
                Popover = __decorate([
                    core_1.Component({
                        selector: 'popover',
                        inputs: ['data', 'reservations', 'activeReservation'],
                        outputs: ['editReservation'],
                        encapsulation: core_1.ViewEncapsulation.None,
                        styleUrls: ['styles/common/popover.css'],
                        template: "\n    <ng-content></ng-content>\n    <div class=\"reservation-popover\" [class.cancelling]=\"isCancelling\">\n      <div class=\"content\">\n        <i class=\"fa fa-check-square-o\"></i> Reserved by you.\n        <div class=\"controllers\">\n          <div><a (click)=\"handleEditReservation()\"><i class=\"fa fa-pencil\"></i> Edit</a></div>\n          <div><a (click)=\"handleCancelReservation()\"><i class=\"fa fa-trash\"></i> Cancel</a></div>\n          <div *ngIf=\"activeReservation && activeReservation.recurring\">\n            <a (click)=\"handleCancelReservation(true)\"><i class=\"fa fa-bars\"></i> Cancel all recurring</a>\n          </div>\n        </div>\n      </div>\n      <!--div class=\"next-available\">\n        <div class=\"content\">\n          <span class=\"title\">Next available</span>\n          <div>\n            <div class=\"time column\">\n              <span>12</span>\n              <span class=\"colon\">:</span>\n              <span>30</span>\n              <span class=\"am-pm\">AM</span>\n            </div>\n            <div class=\"column\">\n              <a class=\"reserve-link\"><i class=\"fa fa-plus\"></i> Reserve</a>\n            </div>\n          </div>\n        </div>\n      </div-->\n    </div>\n  "
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, ReservationService_1.ReservationService])
                ], Popover);
                return Popover;
            })();
            exports_1("Popover", Popover);
            ;
        }
    }
});

//# sourceMappingURL=popover.js.map
