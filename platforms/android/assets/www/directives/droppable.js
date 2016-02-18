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
var Droppable = (function () {
    function Droppable(elementRef, DesignService, FloorElementsService) {
        this.elementRef = elementRef;
        this.DesignService = DesignService;
        this.FloorElementsService = FloorElementsService;
        this.designObservable = DesignService.getObservable();
        this.floorElementsObservable = FloorElementsService.getObservable();
    }
    Droppable.prototype.edit = function (elementID, data) {
        this.FloorElementsService.editElement(elementID, data);
    };
    Droppable.prototype.addNew = function (data) {
        this.FloorElementsService.addElement(data);
    };
    Droppable.prototype.ngOnInit = function () {
        var _this = this;
        var nativeElement = this.elementRef.nativeElement;
        this.designObservable.connect();
        jQuery(nativeElement).droppable({
            activeClass: 'active-droppable',
            hoverClass: 'active-dropping',
            drop: function (e, dropped) {
                var elementID = dropped.draggable.attr('element-id');
                var position = _this.DesignService.getPosition(e, dropped);
                var floorID = jQuery(e.target).data('id');
                if (elementID) {
                    _this.edit(elementID, {
                        floorID: floorID,
                        elementPositionX: position.x,
                        elementPositionY: position.y
                    });
                }
                else {
                    var type = dropped.helper.data('type');
                    _this.addNew({
                        floorID: floorID,
                        elementName: 'Untitled',
                        elementType: type,
                        elementPositionX: position.x,
                        elementPositionY: position.y,
                        elementHeight: 0,
                        elementWidth: 19,
                        capacity: 5
                    });
                }
            }
        });
    };
    Droppable = __decorate([
        core_1.Directive({
            selector: '[droppable-element]'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof DesignService_1.DesignService !== 'undefined' && DesignService_1.DesignService) === 'function' && _b) || Object, (typeof (_c = typeof FloorElementsService_1.FloorElementsService !== 'undefined' && FloorElementsService_1.FloorElementsService) === 'function' && _c) || Object])
    ], Droppable);
    return Droppable;
    var _a, _b, _c;
})();
exports.Droppable = Droppable;
;
//# sourceMappingURL=droppable.js.map
