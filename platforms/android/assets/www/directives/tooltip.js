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
var FloorElementsService_1 = require('../services/FloorElementsService');
var Tooltip = (function () {
    function Tooltip(elementRef) {
        this.elementRef = elementRef;
    }
    Tooltip.prototype.ngOnInit = function () {
        var nativeElement = this.elementRef.nativeElement;
        jQuery('.room').tooltip({
            html: true,
            placement: 'bottom',
            delay: 50,
            title: ""
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof FloorElementsService_1.IFloorElement !== 'undefined' && FloorElementsService_1.IFloorElement) === 'function' && _a) || Object)
    ], Tooltip.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Tooltip.prototype, "reservations", void 0);
    Tooltip = __decorate([
        core_1.Directive({
            selector: '[tooltip]',
            properties: ['data', 'reservations']
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object])
    ], Tooltip);
    return Tooltip;
    var _a, _b;
})();
exports.Tooltip = Tooltip;
;
//# sourceMappingURL=tooltip.js.map
