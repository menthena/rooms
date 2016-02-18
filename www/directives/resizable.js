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
var DesignService_1 = require('../services/DesignService');
var FloorElementsService_1 = require('../services/FloorElementsService');
var Resizable = (function () {
    function Resizable(elementRef, DesignService, FloorElementsService) {
        this.elementRef = elementRef;
        this.DesignService = DesignService;
        this.FloorElementsService = FloorElementsService;
    }
    Resizable.prototype.edit = function (elementID, data) {
        this.FloorElementsService.editElement(elementID, data);
    };
    Resizable.prototype.ngOnInit = function () {
        var _this = this;
        var designMode = this.DesignService.designModeState;
        var nativeElement = this.elementRef.nativeElement;
        var minHeight = 55;
        var maxHeight = 300;
        var minWidth = 50;
        var maxWidth = 400;
        var handles = 'n, e, s, w';
        var intervalID;
        if (this.data && this.data.elementType === 'line') {
            if (this.data.elementVertical) {
                minWidth = 3;
                maxWidth = 3;
                handles = 's, n';
            }
            else {
                minHeight = 3;
                maxHeight = 3;
                handles = 'e, w';
            }
        }
        if (designMode) {
            jQuery(nativeElement)
                .resizable({
                minHeight: minHeight,
                minWidth: minWidth,
                maxWidth: maxWidth,
                maxHeight: maxHeight,
                handles: handles,
                stop: function (e, dropped) {
                    var elementID = dropped.element.attr('element-id');
                    var dimension = _this.DesignService.getDimension(e, dropped);
                    var floorID = jQuery(e.target).data('id');
                    if (elementID) {
                        _this.edit(elementID, {
                            floorID: floorID,
                            elementWidth: dimension.width,
                            elementHeight: dimension.height
                        });
                    }
                }
            });
        }
        else {
            if (jQuery(nativeElement).hasClass('ui-resizable')) {
                jQuery(nativeElement).resizable('destroy');
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Resizable.prototype, "data", void 0);
    Resizable = __decorate([
        core_1.Directive({
            selector: '[resizable-element]',
            inputs: ['data']
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof DesignService_1.DesignService !== 'undefined' && DesignService_1.DesignService) === 'function' && _b) || Object, (typeof (_c = typeof FloorElementsService_1.FloorElementsService !== 'undefined' && FloorElementsService_1.FloorElementsService) === 'function' && _c) || Object])
    ], Resizable);
    return Resizable;
    var _a, _b, _c;
})();
exports.Resizable = Resizable;
;
//# sourceMappingURL=resizable.js.map
