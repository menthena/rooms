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
var DesignService_1 = require('../../services/DesignService');
var FloorElementsService_1 = require('../../services/FloorElementsService');
var draggable_1 = require('../../directives/draggable');
var Icon = (function () {
    function Icon(DesignService, FloorElementsService) {
        this.FloorElementsService = FloorElementsService;
        this.designMode = DesignService.designModeState;
        this.designObservable = DesignService.getObservable();
    }
    Icon.prototype.destroy = function () {
        this.FloorElementsService
            .deleteElement(this.data.floorID, this.data.elementID);
    };
    Icon.prototype.addIconClass = function () {
        return 'icon ' + this.data.elementType;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Icon.prototype, "data", void 0);
    Icon = __decorate([
        core_1.Component({
            selector: 'icon',
            directives: [draggable_1.Draggable],
            inputs: ['data'],
            styleUrls: ['styles/floors/icon.css', 'styles/common/controls.css'],
            template: "\n    <div class=\"wrapper control\" draggable-element\n      [attr.element-id]=\"data.elementID\" [attr.data-id]=\"data.floorID\">\n      <div [ngClass]=\"addIconClass()\">\n      </div>\n      <div class=\"hover-controls\" *ngIf=\"designMode\">\n        <a (click)=\"destroy()\"><i class=\"fa fa-trash\"></i></a>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof DesignService_1.DesignService !== 'undefined' && DesignService_1.DesignService) === 'function' && _a) || Object, (typeof (_b = typeof FloorElementsService_1.FloorElementsService !== 'undefined' && FloorElementsService_1.FloorElementsService) === 'function' && _b) || Object])
    ], Icon);
    return Icon;
    var _a, _b;
})();
exports.Icon = Icon;
//# sourceMappingURL=icon.js.map
