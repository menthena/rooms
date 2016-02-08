System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DatePicker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DatePicker = (function () {
                function DatePicker(elementRef) {
                    this.elementRef = elementRef;
                }
                DatePicker.prototype.ngOnInit = function () {
                    var _this = this;
                    var nativeElement = jQuery(this.elementRef.nativeElement);
                    var dateInput = nativeElement.find('input');
                    dateInput.datepicker({
                        dateFormat: 'dd/mm/yy',
                        onSelect: function (date) {
                            jQuery('#' + _this.controlName).val(date);
                            _this.formModel.value[_this.controlName] = date;
                            _this.formModel.valueChanges.next(_this.formModel.value);
                        }
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DatePicker.prototype, "controlName", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DatePicker.prototype, "formModel", void 0);
                DatePicker = __decorate([
                    core_1.Component({
                        selector: 'date-picker',
                        inputs: ['formModel'],
                        properties: ['controlName'],
                        styleUrls: ['styles/filter.css', 'styles/form/date-picker.css'],
                        encapsulation: core_1.ViewEncapsulation.None,
                        template: "\n    <i class=\"fa fa-calendar\"></i>\n    <input [attr.value]=\"formModel.value[controlName]\" type=\"text\">\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], DatePicker);
                return DatePicker;
            })();
            exports_1("DatePicker", DatePicker);
            ;
        }
    }
});

//# sourceMappingURL=date-picker.js.map
