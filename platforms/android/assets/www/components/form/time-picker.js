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
var TimePicker = (function () {
    function TimePicker(elementRef) {
        this.elementRef = elementRef;
    }
    TimePicker.prototype.ngOnInit = function () {
        var _this = this;
        var nativeElement = jQuery(this.elementRef.nativeElement);
        var timeInput = nativeElement.find('input');
        timeInput.timepicker();
        timeInput.val(this.formModel.value[this.controlName]);
        timeInput.on('click', function () {
            if (_this.className) {
                jQuery('.ui-timepicker-wrapper')
                    .addClass(_this.className);
            }
        });
        timeInput.on('changeTime', function (element) {
            var time = jQuery(element.currentTarget).val();
            jQuery('#' + _this.controlName).val(time);
            _this.formModel.value[_this.controlName] = time;
            _this.formModel.valueChanges.next(_this.formModel.value);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TimePicker.prototype, "controlName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TimePicker.prototype, "formModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TimePicker.prototype, "className", void 0);
    TimePicker = __decorate([
        core_1.Component({
            selector: 'time-picker',
            inputs: ['formModel'],
            properties: ['controlName', 'className'],
            styleUrls: ['styles/filter.css', 'styles/form/time-picker.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n    <input [attr.value]=\"formModel.value[controlName]\" type=\"text\" class=\"time-picker\">\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], TimePicker);
    return TimePicker;
    var _a;
})();
exports.TimePicker = TimePicker;
;
//# sourceMappingURL=time-picker.js.map
