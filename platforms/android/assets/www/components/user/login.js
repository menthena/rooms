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
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var loading_indicator_1 = require('../../directives/loading-indicator');
var UserValidators_1 = require('../../validators/UserValidators');
var UserService_1 = require('../../services/UserService');
var AppService_1 = require('../../services/AppService');
var Login = (function () {
    function Login(fb, router, UserService, UserValidators, AppService) {
        this.fb = fb;
        this.router = router;
        this.UserService = UserService;
        this.UserValidators = UserValidators;
        this.AppService = AppService;
        this.isIonic = this.AppService.isIonic;
        this.loginForm = this.fb.group({
            email: ['', this.UserValidators.EmailValidator],
            password: ['', common_1.Validators.required]
        });
    }
    Login.prototype.submitLoginForm = function () {
        var _this = this;
        var login = this.loginForm.value;
        this.submitted = true;
        if (this.loginForm.valid) {
            this.submitting = true;
            this.invalidCredentials = false;
            this.UserService.login(login.email, login.password)
                .add(function (res) {
                setTimeout(function () {
                    _this.submitting = false;
                    if (!_this.UserService.isLogged) {
                        _this.invalidCredentials = true;
                    }
                    else {
                        _this.router.navigate(['Reserve']);
                    }
                }, 250);
            });
        }
    };
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            directives: [common_1.NgForm, loading_indicator_1.LoadingIndicator, router_1.RouterLink],
            styleUrls: ['styles/common/generic-form.css'],
            template: "\n  <div [ngClass]=\"{'animated slideInRight': isIonic, 'generic-form': true}\">\n    <form [ngFormModel]=\"loginForm\" (ngSubmit)=\"submitLoginForm($event)\" novalidate>\n      <fieldset>\n        <legend>Login</legend>\n        <div class=\"white-bg\">\n          <div class=\"server-err\" [class.active]=\"invalidCredentials\">\n            <i class=\"fa fa-exclamation-circle\"></i> Invalid email or password\n          </div>\n          <div class=\"input-group\">\n            <label for=\"email\">\n              Email\n            </label>\n            <input type=\"email\" placeholder=\"Please enter your email\" name=\"email\" id=\"email\"\n              ngControl=\"email\">\n            <div [class.active]=\"(submitted || loginForm.controls.email.touched) && !loginForm.controls.email.valid\" class=\"err\">\n              <div *ngIf=\"loginForm.controls.email.errors && loginForm.controls.email.errors.required\">\n                <i class=\"fa fa-exclamation-circle\"></i> Please enter your email\n              </div>\n              <div *ngIf=\"loginForm.controls.email.errors && loginForm.controls.email.errors.invalid\">\n                <i class=\"fa fa-exclamation-circle\"></i> Please enter a valid email\n              </div>\n            </div>\n\n          </div>\n          <div class=\"input-group\">\n            <label for=\"password\">\n              Password\n            </label>\n            <input type=\"password\" placeholder=\"Please enter your password\" name=\"password\"\n              id=\"password\" ngControl=\"password\">\n            <div [class.active]=\"(submitted || loginForm.controls.password.touched) && !loginForm.controls.password.valid\" class=\"err\">\n                <i class=\"fa fa-exclamation-circle\"></i> Please enter your password\n            </div>\n          </div>\n          <div class=\"buttons\">\n            <button class=\"btn\" [class.submitting]=\"submitting\">\n              <span>Log in</span>\n            </button>\n          </div>\n          <div class=\"sub-form\">\n            You forgot your password? It is okay, we all have been there. <a [routerLink]=\"['/RecoverPassword']\">Recover password</a>.\n            <div>\n              OR you can <a [routerLink]=\"['/Register']\">register</a>.\n            </div>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof UserService_1.UserService !== 'undefined' && UserService_1.UserService) === 'function' && _c) || Object, (typeof (_d = typeof UserValidators_1.UserValidators !== 'undefined' && UserValidators_1.UserValidators) === 'function' && _d) || Object, (typeof (_e = typeof AppService_1.AppService !== 'undefined' && AppService_1.AppService) === 'function' && _e) || Object])
    ], Login);
    return Login;
    var _a, _b, _c, _d, _e;
})();
exports.Login = Login;
//# sourceMappingURL=login.js.map
