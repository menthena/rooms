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
var draggable_1 = require('../../directives/draggable');
var scrollable_1 = require('../../directives/scrollable');
var DesignTools = (function () {
    function DesignTools() {
    }
    DesignTools = __decorate([
        core_1.Component({
            directives: [draggable_1.Draggable, scrollable_1.Scrollable],
            selector: 'design-tools',
            template: "\n  <div class=\"wrapper\">\n    <div class=\"design-tools\" scrollable-element>\n\n      <ul class=\"list-inline\">\n        <li>\n          <h1>Design Tools</h1>\n        </li>\n        <li class=\"room\">\n          <a draggable-element clone=\"true\" data-type=\"room\">\n            Drag a room\n          </a>\n        </li>\n\n        <li class=\"placeholder\">\n          <a draggable-element clone=\"true\" data-type=\"placeholder\">\n            Drag a placeholder\n          </a>\n        </li>\n\n        <li class=\"line\">\n          <a draggable-element clone=\"true\" data-type=\"line\">\n            Drag a line\n            <div class=\"bar\"></div>\n          </a>\n        </li>\n\n        <li class=\"icons\">\n          <a draggable-element clone=\"true\" data-type=\"icon-kitchen\" class=\"icon icon-kitchen\"></a>\n          <a draggable-element clone=\"true\" data-type=\"icon-wc\" class=\"icon icon-wc\"></a>\n          <a draggable-element clone=\"true\" data-type=\"icon-elevator\" class=\"icon icon-elevator\"></a>\n          <a draggable-element clone=\"true\" data-type=\"icon-exit\" class=\"icon icon-exit\"></a>\n          <a draggable-element clone=\"true\" data-type=\"icon-stairs\" class=\"icon icon-stairs\"></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  ",
            styleUrls: ['styles/design/design-tools.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DesignTools);
    return DesignTools;
})();
exports.DesignTools = DesignTools;
//# sourceMappingURL=design-tools.js.map
