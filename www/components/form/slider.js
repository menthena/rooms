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
var Slider = (function () {
    function Slider(elementRef) {
        this.elementRef = elementRef;
    }
    Slider.prototype.ngOnInit = function () {
        var _this = this;
        var sliderElement = jQuery(this.elementRef.nativeElement);
        var options = {
            range: false,
            max: 50,
            value: this.formModel.value[this.controlName],
            change: function (e, obj) {
                var value = obj.value;
                jQuery('#' + _this.controlName).val(value);
                _this.formModel.value[_this.controlName] = value;
                _this.formModel.valueChanges.next(_this.formModel.value);
            }
        };
        // if (this.range) {
        //   // options.min = this.min;
        //   options.min = Number(this.min;
        //   options.max = Number(this.max);
        //   console.log(this.min);
        //   options.range = true;
        // }
        sliderElement.slider(options);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Slider.prototype, "controlName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Slider.prototype, "formModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Slider.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Slider.prototype, "min", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Slider.prototype, "range", void 0);
    Slider = __decorate([
        core_1.Component({
            selector: 'slider',
            inputs: ['formModel', 'max', 'min', 'range'],
            properties: ['controlName'],
            styleUrls: ['styles/form/slider.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n    <ng-content></ng-content>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], Slider);
    return Slider;
    var _a;
})();
exports.Slider = Slider;
;
//# sourceMappingURL=slider.js.map
