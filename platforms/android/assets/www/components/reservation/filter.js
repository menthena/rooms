System.register(['angular2/core', 'angular2/common', '../form/date-picker', '../form/time-picker', '../../services/ReservationService', '../../constants', '../form/select-menu', '../form/slider', '../form/feature-list', '../form/button', 'rxjs'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, date_picker_1, time_picker_1, ReservationService_1, constants_1, select_menu_1, slider_1, feature_list_1, button_1, rxjs_1;
    var Filter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (date_picker_1_1) {
                date_picker_1 = date_picker_1_1;
            },
            function (time_picker_1_1) {
                time_picker_1 = time_picker_1_1;
            },
            function (ReservationService_1_1) {
                ReservationService_1 = ReservationService_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (select_menu_1_1) {
                select_menu_1 = select_menu_1_1;
            },
            function (slider_1_1) {
                slider_1 = slider_1_1;
            },
            function (feature_list_1_1) {
                feature_list_1 = feature_list_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            }],
        execute: function() {
            Filter = (function () {
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
                        template: "\n  <div class=\"filter\">\n    <form [ngFormModel]=\"filterForm\" (ngSubmit)=\"submitFilterForm($event)\">\n      <h1>Reserve a room</h1>\n\n      <ul class=\"list-unstyled row\">\n        <li class=\"col-sm-12 col-xs-6 with-icon\">\n          <div class=\"input-group\">\n            <input type=\"hidden\" id=\"date\" name=\"date\" ngControl=\"date\" value=\"\">\n            <label for=\"date\">Date</label>\n            <date-picker controlName=\"date\" [formModel]=\"filterForm\" [data]=\"filter\"></date-picker>\n          </div>\n        </li>\n        <li class=\"col-sm-12 col-xs-6 with-icon time\">\n          <div class=\"input-group\">\n            <label for=\"time\">Time</label>\n            <i class=\"fa fa-clock-o\"></i>\n            <input type=\"hidden\" id=\"time\" name=\"time\" ngControl=\"time\" value=\"\">\n            <time-picker controlName=\"time\" [formModel]=\"filterForm\" [data]=\"filter\"></time-picker>\n          </div>\n        </li>\n        <li class=\"col-sm-12 col-xs-6\">\n          <div class=\"input-group\">\n            <label for=\"duration\">Duration</label>\n            <input type=\"hidden\" id=\"duration\" name=\"duration\" ngControl=\"duration\" value=\"\">\n            <select controlName=\"duration\" [formModel]=\"filterForm\" name=\"duration\" id=\"duration\" select-menu>\n              <option *ngFor=\"#item of durationData\" value=\"{{ item.value }}\">{{ item.text }}</option>\n            </select>\n          </div>\n        </li>\n        <li class=\"col-sm-12 col-xs-6\">\n          <div class=\"input-group\">\n            <label>Min. capacity:<span class=\"slider-content\">({{ filterForm.value.capacity }})</span></label>\n            <input type=\"hidden\" id=\"capacity\" name=\"capacity\" ngControl=\"capacity\" value=\"\">\n            <slider range=\"true\" min=\"1\" max=\"60\" controlName=\"capacity\" [formModel]=\"filterForm\"></slider>\n          </div>\n        </li>\n        <li class=\"col-sm-12 col-xs-6\">\n          <div class=\"input-group\">\n            <label>Filter</label>\n            <input type=\"hidden\" id=\"features\" name=\"features\" ngControl=\"features\" value=\"\">\n            <feature-list controlName=\"features\" [formModel]=\"filterForm\"></feature-list>\n          </div>\n        </li>\n      </ul>\n    </form>\n  </div>\n  ",
                        styleUrls: ['styles/filter.css']
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, ReservationService_1.ReservationService])
                ], Filter);
                return Filter;
            })();
            exports_1("Filter", Filter);
        }
    }
});

//# sourceMappingURL=filter.js.map
