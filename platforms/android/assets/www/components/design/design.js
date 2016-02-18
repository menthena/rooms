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
var router_1 = require('angular2/router');
var design_tools_1 = require('./design-tools');
var floors_1 = require('../floors/floors');
var DesignService_1 = require('../../services/DesignService');
var UserService_1 = require('../../services/UserService');
var Design = (function () {
    function Design(DesignService, UserService, router) {
        this.DesignService = DesignService;
        this.UserService = UserService;
        this.router = router;
        this.DesignService.designModeState = true;
        if (!this.UserService.isLogged) {
            this.router.navigate(['Login']);
        }
    }
    Design = __decorate([
        core_1.Component({
            directives: [design_tools_1.DesignTools, floors_1.Floors],
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'design',
            template: "\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <design-tools></design-tools>\n        </div>\n        <div class=\"col-sm-9\">\n          <floors></floors>\n        </div>\n      </div>\n    </div>\n  ",
            styleUrls: ['styles/design/design.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof DesignService_1.DesignService !== 'undefined' && DesignService_1.DesignService) === 'function' && _a) || Object, (typeof (_b = typeof UserService_1.UserService !== 'undefined' && UserService_1.UserService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
    ], Design);
    return Design;
    var _a, _b, _c;
})();
exports.Design = Design;
//# sourceMappingURL=design.js.map
