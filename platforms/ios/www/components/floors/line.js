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
var FloorElementsService_1 = require('../../services/FloorElementsService');
var resizable_1 = require('../../directives/resizable');
var DesignService_1 = require('../../services/DesignService');
var edit_element_1 = require('../design/edit-element');
var draggable_1 = require('../../directives/draggable');
var Line = (function () {
    function Line(DesignService, FloorElementsService) {
        this.FloorElementsService = FloorElementsService;
        this.designMode = DesignService.designModeState;
        this.designObservable = DesignService.getObservable();
    }
    Line.prototype.rotate = function () {
        var width = this.data.elementWidth;
        var height = this.data.elementHeight;
        console.log(this.data.elementVertical);
        if (!this.data.elementVertical) {
            width = 3;
            height = 45;
        }
        else {
            width = 10;
            height = 3;
        }
        this.FloorElementsService.editElement(this.data.elementID, {
            floorID: this.data.floorID,
            elementWidth: width,
            elementHeight: height,
            elementVertical: !this.data.elementVertical
        });
    };
    Line.prototype.destroy = function () {
        this.FloorElementsService
            .deleteElement(this.data.floorID, this.data.elementID);
    };
    Line.prototype.editElement = function () {
        this.designObservable
            .subscription
            .next({
            type: 'edit',
            data: this.data.elementID
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Line.prototype, "data", void 0);
    Line = __decorate([
        core_1.Component({
            selector: 'line',
            directives: [resizable_1.Resizable, draggable_1.Draggable, edit_element_1.EditElement],
            inputs: ['data'],
            styleUrls: ['styles/floors/line.css', 'styles/common/controls.css'],
            template: "\n    <div class=\"wrapper control\" resizable-element draggable-element\n      [containment]=\"'#floor' + data.floorID\" [data]=\"data\" [attr.element-id]=\"data.elementID\" [attr.data-id]=\"data.floorID\">\n      <div class=\"line\" [class.vertical]=\"data.elementVertical\">\n        <a (click)=\"rotate()\" class=\"rotate-icon\" *ngIf=\"designMode\">\n          <i class=\"fa\" [class.fa-repeat]=\"!data.elementVertical\" [class.fa-undo]=\"data.elementVertical\"></i>\n        </a>\n      </div>\n      <div class=\"hover-controls\" *ngIf=\"designMode\">\n        <a (click)=\"destroy()\"><i class=\"fa fa-trash\"></i></a>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof DesignService_1.DesignService !== 'undefined' && DesignService_1.DesignService) === 'function' && _a) || Object, (typeof (_b = typeof FloorElementsService_1.FloorElementsService !== 'undefined' && FloorElementsService_1.FloorElementsService) === 'function' && _b) || Object])
    ], Line);
    return Line;
    var _a, _b;
})();
exports.Line = Line;
//# sourceMappingURL=line.js.map
