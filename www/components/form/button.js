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
    var Button;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Button = (function () {
                function Button(elementRef) {
                    this.elementRef = elementRef;
                }
                Button.prototype.getValues = function () {
                    var values = String(this.formModel.value[this.controlName]).split(',');
                    if (values.length <= 1 && (values[0] === '' || values[0] === 'null')) {
                        values = [];
                    }
                    return values;
                };
                Button.prototype.updateModel = function (values, value) {
                    jQuery('#' + this.controlName).prop('checked', value);
                    this.formModel.value[this.controlName] = values;
                    this.formModel.valueChanges.next(this.formModel.value);
                };
                Button.prototype.ngOnInit = function () {
                    var _this = this;
                    var buttonElement = jQuery(this.elementRef.nativeElement);
                    buttonElement.button({
                        text: false
                    });
                    var values = this.getValues();
                    var value = buttonElement.prop('id');
                    var index = values.indexOf(value);
                    if (index > -1) {
                        this.updateModel(values, value);
                    }
                    buttonElement.change(function (e) {
                        var values = _this.getValues();
                        var isChecked = jQuery(e.target).prop('checked');
                        var value = jQuery(e.target).prop('id');
                        var index = values.indexOf(value);
                        if (isChecked) {
                            if (index === -1) {
                                values.push(value);
                            }
                        }
                        else if (index > -1) {
                            values.splice(index, 1);
                        }
                        _this.updateModel(values, value);
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Button.prototype, "controlName", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Button.prototype, "formModel", void 0);
                Button = __decorate([
                    core_1.Component({
                        selector: '[button]',
                        inputs: ['formModel'],
                        properties: ['controlName'],
                        styleUrls: ['styles/form/button.css'],
                        encapsulation: core_1.ViewEncapsulation.None,
                        template: "<ng-content></ng-content>"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Button);
                return Button;
            })();
            exports_1("Button", Button);
            ;
        }
    }
});

//# sourceMappingURL=button.js.map
