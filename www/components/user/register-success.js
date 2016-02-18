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
var UserService_1 = require('../../services/UserService');
var RegisterSuccess = (function () {
    function RegisterSuccess(router, UserService) {
        this.router = router;
        this.UserService = UserService;
        this.user = {};
    }
    RegisterSuccess.prototype.ngOnInit = function () {
        var _this = this;
        this.UserService.getUser()
            .add(function () {
            var data = _this.UserService.userData;
            _this.user = data;
        });
    };
    RegisterSuccess = __decorate([
        core_1.Component({
            selector: 'login',
            styleUrls: ['styles/common/generic-success.css'],
            template: "\n  <div class=\"generic-success\">\n    <div class=\"header\">\n      Successfully registered!\n    </div>\n\n    <div class=\"white-bg\">\n      <p>Thank you, {{ user.name }}</p>\n      <p>We have bla bla</p>\n      <p><a href>abc</a></p>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof UserService_1.UserService !== 'undefined' && UserService_1.UserService) === 'function' && _b) || Object])
    ], RegisterSuccess);
    return RegisterSuccess;
    var _a, _b;
})();
exports.RegisterSuccess = RegisterSuccess;
//# sourceMappingURL=register-success.js.map
