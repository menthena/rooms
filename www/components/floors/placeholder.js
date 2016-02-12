System.register(['angular2/core', '../../directives/resizable', '../../services/DesignService', '../../services/FloorElementsService', '../design/edit-element', '../../directives/draggable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, resizable_1, DesignService_1, FloorElementsService_1, edit_element_1, draggable_1;
    var Placeholder;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (resizable_1_1) {
                resizable_1 = resizable_1_1;
            },
            function (DesignService_1_1) {
                DesignService_1 = DesignService_1_1;
            },
            function (FloorElementsService_1_1) {
                FloorElementsService_1 = FloorElementsService_1_1;
            },
            function (edit_element_1_1) {
                edit_element_1 = edit_element_1_1;
            },
            function (draggable_1_1) {
                draggable_1 = draggable_1_1;
            }],
        execute: function() {
            Placeholder = (function () {
                function Placeholder(DesignService, FloorElementsService) {
                    this.FloorElementsService = FloorElementsService;
                    this.designMode = DesignService.designModeState;
                    this.designObservable = DesignService.getObservable();
                }
                Placeholder.prototype.destroy = function () {
                    this.FloorElementsService
                        .deleteElement(this.data.floorID, this.data.elementID);
                };
                Placeholder.prototype.editElement = function () {
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
                ], Placeholder.prototype, "data", void 0);
                Placeholder = __decorate([
                    core_1.Component({
                        selector: 'placeholder',
                        directives: [resizable_1.Resizable, draggable_1.Draggable, edit_element_1.EditElement],
                        inputs: ['data'],
                        styleUrls: ['styles/floors/placeholder.css', 'styles/common/controls.css'],
                        template: "\n    <div class=\"wrapper control\" resizable-element draggable-element\n      [containment]=\"'#floor' + data.floorID\" [attr.element-id]=\"data.elementID\" [attr.data-id]=\"data.floorID\">\n      <edit-element *ngIf=\"designMode\" place-element place-type=\"modal\" [data]=\"data\"></edit-element>\n      <div class=\"placeholder\">\n        <div><span>{{ data.elementName }}</span></div>\n        <div *ngIf=\"designMode\" >\n          <a (click)=\"editElement()\"><i class=\"fa fa-pencil\"></i></a>\n          <a (click)=\"destroy()\"><i class=\"fa fa-trash\"></i></a>\n        </div>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [DesignService_1.DesignService, FloorElementsService_1.FloorElementsService])
                ], Placeholder);
                return Placeholder;
            })();
            exports_1("Placeholder", Placeholder);
        }
    }
});

//# sourceMappingURL=placeholder.js.map
