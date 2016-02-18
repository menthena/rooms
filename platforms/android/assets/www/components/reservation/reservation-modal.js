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
var common_1 = require('angular2/common');
var date_picker_1 = require('../form/date-picker');
var select_menu_1 = require('../form/select-menu');
var FloorElementsService_1 = require('../../services/FloorElementsService');
var time_picker_1 = require('../form/time-picker');
var button_1 = require('../form/button');
var constants_1 = require('../../config/constants');
var ReservationService_1 = require('../../services/ReservationService');
var ReservationModal = (function () {
    function ReservationModal(elementRef, ReservationService, fb) {
        this.elementRef = elementRef;
        this.ReservationService = ReservationService;
        this.fb = fb;
        this.reservationFilterObserver = ReservationService.getReservationFilterObserver();
        this.reservationTime = ReservationService.reservationTime;
        if (this.ReservationService.filter.reservationDate) {
            this.reservationDate = this.ReservationService.filter.reservationDate.format(constants_1.DATE_ONLY_FORMAT);
        }
        this.reservationObserver = ReservationService.getObservable();
        this.isActive = false;
        this.intervalData = constants_1.INTERVAL_DATA;
    }
    ReservationModal.prototype.dismissBooking = function () {
        var _this = this;
        if (!this.isSubmitting) {
            this.isActive = false;
            setTimeout(function () {
                _this.reservationObserver
                    .subscription
                    .next();
                _this.reserveID = null;
            }, 200);
        }
    };
    ReservationModal.prototype.submitReservationForm = function () {
        var _this = this;
        if (!this.isSubmitting) {
            this.isSubmitting = true;
            this.ReservationService.makeReservation({
                elementID: this.data.elementID,
                description: this.reserveForm.value.description,
                recurring: this.reserveForm.value.recurring,
                interval: this.reserveForm.value.interval,
                until: moment(this.reserveForm.value.until, constants_1.DATE_ONLY_FORMAT)
            })
                .add(function () {
                _this.reservationObserver
                    .subscription
                    .next();
                _this.isSubmitting = false;
            });
        }
    };
    ReservationModal.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.activeReservation) {
            var description = this.activeReservation.description;
            var reservationDate = moment.utc(this.activeReservation.reservationDate);
            var reservationEndDate = moment.utc(this.activeReservation.reservationEndDate);
            this.reserveForm = this.fb.group({
                description: [description],
                from: [reservationDate.format('h:mma')],
                to: [reservationEndDate.format('h:mma')]
            });
        }
        else {
            this.reserveForm = this.fb.group({
                description: [''],
                from: [''],
                to: [''],
                recurring: [false],
                interval: ['day'],
                until: ['']
            });
        }
        this.reserveForm.valueChanges
            .subscribe(function (res) {
            _this.reserveForm.value = res;
        });
    };
    ReservationModal.prototype.ngOnInit = function () {
        var _this = this;
        this.reservationObserver
            .delay(50)
            .subscribe(function () {
            _this.isActive = true;
        });
        this.reservationFilterObserver
            .subscribe(function () {
            _this.reservationTime = _this.ReservationService.reservationTime;
            _this.reservationDate = _this.ReservationService.filter.reservationDate.format(constants_1.DATE_ONLY_FORMAT);
        });
        this.reservationObserver
            .subscribe(function (res) {
            _this.isActive = false;
            _this.reserveID = res;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof FloorElementsService_1.IFloorElement !== 'undefined' && FloorElementsService_1.IFloorElement) === 'function' && _a) || Object)
    ], ReservationModal.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_b = typeof ReservationService_1.IReservation !== 'undefined' && ReservationService_1.IReservation) === 'function' && _b) || Object)
    ], ReservationModal.prototype, "activeReservation", void 0);
    ReservationModal = __decorate([
        core_1.Component({
            selector: 'reservation-modal',
            directives: [date_picker_1.DatePicker, select_menu_1.SelectMenu, button_1.Button, time_picker_1.TimePicker],
            styleUrls: ['styles/reservation-modal.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            inputs: ['data', 'formData', 'activeReservation'],
            template: "\n    <div class=\"wrapper\">\n      <div class=\"booking\" *ngIf=\"reserveID === data.elementID\" [ngClass]=\"{'active': isActive, 'submitting': isSubmitting}\">\n        <form [ngFormModel]=\"reserveForm\" (submit)=\"submitReservationForm($event)\">\n          <div *ngIf=\"!activeReservation\">\n            <div class=\"heading\">\n              Booking room / {{ data.elementName }}\n            </div>\n            <div class=\"time\">\n              <div>\n                <i class=\"fa fa-calendar\"></i>\n                <strong>{{ reservationDate }}</strong>\n              </div>\n              <div>\n                <i class=\"fa fa-clock-o\"></i>\n                {{ reservationTime }}\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"activeReservation\">\n            <div class=\"heading\">\n              Edit reservation\n            </div>\n\n            <div class=\"row form-element\">\n              <div class=\"col-xs-4\">\n                <label for=\"from\">From</label>\n                <input type=\"hidden\" id=\"from\" name=\"from\" ngControl=\"from\" value=\"\">\n                <time-picker controlName=\"from\" [formModel]=\"reserveForm\" class-name=\"reservation-modal\"></time-picker>\n              </div>\n\n              <div class=\"col-xs-4\">\n                <label for=\"to\">To</label>\n                <input type=\"hidden\" id=\"to\" name=\"to\" ngControl=\"to\" value=\"\">\n                <time-picker controlName=\"to\" [formModel]=\"reserveForm\" class-name=\"reservation-modal\"></time-picker>\n              </div>\n            </div>\n\n\n          </div>\n          <div class=\"form-element\">\n            <label for=\"description\">Description</label>\n            <textarea name=\"description\" ngControl=\"description\" id=\"description\" placeholder=\"Enter description...\"></textarea>\n          </div>\n\n          <div class=\"form-element recurring\">\n              <input button type=\"checkbox\" name=\"recurring\" id=\"recurring\"\n                ngControl=\"recurring\" [formModel]=\"reserveForm\">\n              <label for=\"recurring\">\n                Recurring\n              </label>\n\n          </div>\n\n          <div class=\"row form-element\" *ngIf=\"reserveForm.value.recurring\">\n            <div class=\"col-xs-6\">\n              <label for=\"from\">Interval</label>\n              <select controlName=\"interval\" [formModel]=\"reserveForm\" name=\"interval\" id=\"interval\" select-menu>\n                <option *ngFor=\"#item of intervalData\" value=\"{{ item.value }}\">{{ item.text }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-xs-6\">\n              <label for=\"to\">Until</label>\n              <input type=\"hidden\" id=\"until\" name=\"until\" ngControl=\"until\" value=\"\">\n              <date-picker controlName=\"until\" [formModel]=\"reserveForm\" [data]=\"filter\"></date-picker>\n            </div>\n          </div>\n\n          <div class=\"buttons\">\n            <a (click)=\"dismissBooking()\"><i class=\"fa fa-times\"></i></a>\n            <a (click)=\"submitReservationForm()\"><i class=\"fa fa-check\"></i></a>\n          </div>\n        </form>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _c) || Object, (typeof (_d = typeof ReservationService_1.ReservationService !== 'undefined' && ReservationService_1.ReservationService) === 'function' && _d) || Object, (typeof (_e = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _e) || Object])
    ], ReservationModal);
    return ReservationModal;
    var _a, _b, _c, _d, _e;
})();
exports.ReservationModal = ReservationModal;
//# sourceMappingURL=reservation-modal.js.map
