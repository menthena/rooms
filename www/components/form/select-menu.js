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
var SelectMenu = (function () {
    function SelectMenu(elementRef) {
        this.elementRef = elementRef;
    }
    SelectMenu.prototype.updateModel = function (value) {
        jQuery('#' + this.controlName).val(value);
        this.formModel.value[this.controlName] = value;
        this.formModel.valueChanges.next(this.formModel.value);
    };
    SelectMenu.prototype.ngOnInit = function () {
        var _this = this;
        var selectBox = jQuery(this.elementRef.nativeElement);
        var options = {
            style: 'popup',
            width: 'auto',
            select: function (e, obj) {
                var value = obj.item.value;
                _this.updateModel(value);
            }
        };
        if (this.selectFormat === 'input') {
            options.format = (function () {
                var input = '<input class="other" type="text" value="Other..." />';
                return jQuery('<span/>')
                    .append(input)
                    .outerHTML;
            });
        }
        selectBox
            .selectmenu(options)
            .selectmenu('menuWidget')
            .addClass('max-selectbox');
        setTimeout(function () {
            selectBox.val(_this.formModel.value[_this.controlName]);
            selectBox.selectmenu('refresh');
        }, 200);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SelectMenu.prototype, "controlName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectMenu.prototype, "formModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectMenu.prototype, "selectFormat", void 0);
    SelectMenu = __decorate([
        core_1.Component({
            selector: '[select-menu]',
            inputs: ['formModel'],
            properties: ['controlName', 'selectFormat'],
            styleUrls: ['styles/form/select-menu.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], SelectMenu);
    return SelectMenu;
    var _a;
})();
exports.SelectMenu = SelectMenu;
;
//# sourceMappingURL=select-menu.js.map
