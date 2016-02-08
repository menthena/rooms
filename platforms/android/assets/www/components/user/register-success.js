System.register(['angular2/core', 'angular2/router', '../../services/UserService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, UserService_1;
    var RegisterSuccess;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            }],
        execute: function() {
            RegisterSuccess = (function () {
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
                    __metadata('design:paramtypes', [router_1.Router, UserService_1.UserService])
                ], RegisterSuccess);
                return RegisterSuccess;
            })();
            exports_1("RegisterSuccess", RegisterSuccess);
        }
    }
});

//# sourceMappingURL=register-success.js.map
