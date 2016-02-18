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
var time_picker_1 = require('../form/time-picker');
var ReservationService_1 = require('../../services/ReservationService');
var constants_1 = require('../../config/constants');
var select_menu_1 = require('../form/select-menu');
var slider_1 = require('../form/slider');
var feature_list_1 = require('../form/feature-list');
var button_1 = require('../form/button');
var rxjs_1 = require('rxjs');
var Filter = (function () {
    function Filter(fb, ReservationService) {
        var _this = this;
        this.fb = fb;
        this.ReservationService = ReservationService;
        this.form = new core_1.EventEmitter();
        this.durationData = constants_1.DURATION_DATA;
        this.updateTime();
        rxjs_1.Observable.timer(6000, 6000)
            .subscribe(function () {
            if (moment().diff(moment(_this.time, 'h:mma')) > 0) {
                _this.updateTime();
                _this.updateForm();
            }
        });
    }
    Filter.prototype.updateTime = function () {
        this.time = this.ReservationService.updateTime();
        if (this.filterForm) {
            this.filterForm.value.time = this.time;
        }
    };
    Filter.prototype.updateForm = function () {
        this.form.next(this.filterForm.value);
    };
    Filter.prototype.ngOnChanges = function () {
        console.log('tick');
    };
    Filter.prototype.ngOnInit = function () {
        var _this = this;
        this.filterForm = this.fb.group({
            date: [this.ReservationService.filter.date.format('DD/MM/YYYY')],
            time: [this.time],
            duration: [this.ReservationService.filter.duration],
            capacity: [this.ReservationService.filter.capacity],
            features: [this.ReservationService.filter.feature]
        });
        // this.filter = {
        //   date: this.ReservationService.filter.date.format('DD/MM/YYYY'),
        //   time: this.time,
        //   duration: this.ReservationService.filter.duration,
        //   capacity: this.ReservationService.filter.capacity,
        //   features: this.ReservationService.filter.feature
        // };
        this.filterForm.valueChanges
            .subscribe(function (res) {
            _this.form.emit(res);
        });
        this.updateForm();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Filter.prototype, "form", void 0);
    Filter = __decorate([
        core_1.Component({
            directives: [date_picker_1.DatePicker, select_menu_1.SelectMenu, slider_1.Slider, button_1.Button, feature_list_1.FeatureList, time_picker_1.TimePicker],
            selector: 'element-filter',
            // TODO:
            // outputs: ['form'],
            template: "\n  <div class=\"filter\">\n    <form [ngFormModel]=\"filterForm\" (ngSubmit)=\"submitFilterForm($event)\">\n      <h1>Reserve a room</h1>\n\n      <ul class=\"list-unstyled row\">\n        <li class=\"col-sm-12 col-xs-6 with-icon\">\n          <div class=\"input-group\">\n            <input type=\"hidden\" id=\"date\" name=\"date\" ngControl=\"date\" value=\"\">\n            <label for=\"date\">Date</label>\n            <date-picker controlName=\"date\" [formModel]=\"filterForm\" [data]=\"filter\"></date-picker>\n          </div>\n        </li>\n        <li class=\"col-sm-12 col-xs-6 with-icon time\">\n          <div class=\"input-group\">\n            <label for=\"time\">Time</label>\n            <i class=\"fa fa-clock-o\"></i>\n            <input type=\"hidden\" id=\"time\" name=\"time\" ngControl=\"time\" value=\"\">\n            <time-picker controlName=\"time\" [formModel]=\"filterForm\" [data]=\"filter\"></time-picker>\n          </div>\n        </li>\n        <li class=\"col-sm-12 col-xs-6\">\n          <div class=\"input-group\">\n            <label for=\"duration\">Duration</label>\n            <input type=\"hidden\" id=\"duration\" name=\"duration\" ngControl=\"duration\" value=\"\">\n            <select controlName=\"duration\" [formModel]=\"filterForm\" name=\"duration\" id=\"duration\" select-menu>\n              <option *ngFor=\"#item of durationData\" value=\"{{ item.value }}\">{{ item.text }}</option>\n            </select>\n          </div>\n        </li>\n        <li class=\"col-sm-12 col-xs-6\">\n          <div class=\"input-group\">\n            <label>Min. capacity:<span class=\"slider-content\">({{ filterForm.value.capacity }})</span></label>\n            <input type=\"hidden\" id=\"capacity\" name=\"capacity\" ngControl=\"capacity\" value=\"\">\n            <slider range=\"true\" min=\"1\" max=\"60\" controlName=\"capacity\" [formModel]=\"filterForm\"></slider>\n          </div>\n        </li>\n        <li class=\"col-sm-12 col-xs-6\">\n          <div class=\"input-group\">\n            <label>Filter</label>\n            <input type=\"hidden\" id=\"features\" name=\"features\" ngControl=\"features\" value=\"\">\n            <feature-list controlName=\"features\" [formModel]=\"filterForm\"></feature-list>\n          </div>\n        </li>\n      </ul>\n    </form>\n  </div>\n  ",
            styleUrls: ['styles/filter.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof ReservationService_1.ReservationService !== 'undefined' && ReservationService_1.ReservationService) === 'function' && _b) || Object])
    ], Filter);
    return Filter;
    var _a, _b;
})();
exports.Filter = Filter;
//# sourceMappingURL=filter.js.map
