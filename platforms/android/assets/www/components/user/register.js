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
var UserService_1 = require('../../services/UserService');
var AppService_1 = require('../../services/AppService');
var UserValidators_1 = require('../../validators/UserValidators');
var Register = (function () {
    function Register(fb, router, UserService, UserValidators, AppService) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.UserService = UserService;
        this.UserValidators = UserValidators;
        this.AppService = AppService;
        this.isIonic = this.AppService.isIonic;
        this.registerForm = this.fb.group({
            name: ['', common_1.Validators.required],
            companyName: ['', common_1.Validators.required],
            email: ['', this.UserValidators.EmailValidator],
            reemail: ['', function (control) {
                    if (!control.value) {
                        return {
                            required: true
                        };
                    }
                    else if (control.value !== _this.registerForm.value.email) {
                        return {
                            notMatch: true
                        };
                    }
                }],
            password: ['', this.UserValidators.PasswordValidator]
        });
    }
    Register.prototype.submitLoginForm = function () {
        var _this = this;
        var register = this.registerForm.value;
        this.submitted = true;
        if (this.registerForm.valid) {
            this.submitting = true;
            this.UserService.register({
                companyName: register.companyName,
                name: register.name,
                email: register.email,
                password: register.password
            }).subscribe(function (res) {
                setTimeout(function () {
                    _this.submitting = false;
                    _this.router.navigate(['RegisterSuccess']);
                }, 250);
            }, function (err) {
                _this.submitting = false;
                if (err.status === 409) {
                    _this.error = 'There is a user with the same email address.';
                }
                else {
                    _this.error = 'Server error occured';
                }
            });
        }
    };
    Register = __decorate([
        core_1.Component({
            selector: 'register',
            directives: [common_1.NgForm, loading_indicator_1.LoadingIndicator, router_1.RouterLink],
            styleUrls: ['styles/common/generic-form.css'],
            template: "\n  <div class=\"generic-form\" [ngClass]=\"{'animated slideInRight': isIonic}\">\n    <form [ngFormModel]=\"registerForm\" (ngSubmit)=\"submitLoginForm($event)\" novalidate>\n      <fieldset>\n        <legend>Register</legend>\n        <div class=\"white-bg\">\n          <div class=\"server-err\" [class.active]=\"error\">\n            <i class=\"fa fa-exclamation-circle\"></i> {{ error }}\n          </div>\n\n          <div class=\"input-group\">\n            <label for=\"name\">\n              Name\n            </label>\n            <input type=\"name\" placeholder=\"Please enter your name\" name=\"name\" id=\"name\"\n              ngControl=\"name\">\n            <div [class.active]=\"(submitted || registerForm.controls.name.touched) && !registerForm.controls.name.valid\" class=\"err\">\n              <div *ngIf=\"registerForm.controls.name.errors && registerForm.controls.name.errors.required\">\n                <i class=\"fa fa-exclamation-circle\"></i> Please enter your name\n              </div>\n            </div>\n          </div>\n\n          <div class=\"input-group\">\n            <label for=\"companyName\">\n              Company name\n            </label>\n            <input type=\"companyName\" placeholder=\"Please enter the company name\" name=\"companyName\" id=\"companyName\"\n              ngControl=\"companyName\">\n            <div [class.active]=\"(submitted || registerForm.controls.companyName.touched) &&\n                !registerForm.controls.companyName.valid\" class=\"err\">\n              <div *ngIf=\"registerForm.controls.companyName.errors && registerForm.controls.companyName.errors.required\">\n                <i class=\"fa fa-exclamation-circle\"></i> Please enter the company name\n              </div>\n            </div>\n          </div>\n\n          <div class=\"input-group\">\n            <label for=\"email\">\n              Email\n            </label>\n            <input type=\"email\" placeholder=\"Please enter your email\" name=\"email\" id=\"email\"\n              ngControl=\"email\">\n            <div [class.active]=\"(submitted || registerForm.controls.email.touched) && !registerForm.controls.email.valid\" class=\"err\">\n              <div *ngIf=\"registerForm.controls.email.errors && registerForm.controls.email.errors.required\">\n                <i class=\"fa fa-exclamation-circle\"></i> Please enter your email\n              </div>\n              <div *ngIf=\"registerForm.controls.email.errors && registerForm.controls.email.errors.invalid\">\n                <i class=\"fa fa-exclamation-circle\"></i> Please enter a valid email\n              </div>\n            </div>\n          </div>\n\n          <div class=\"input-group\">\n            <label for=\"reemail\">\n              Re-enter email\n            </label>\n            <input type=\"reemail\" placeholder=\"Please re enter your reemail\" name=\"reemail\" id=\"reemail\"\n              ngControl=\"reemail\">\n            <div [class.active]=\"(submitted || registerForm.controls.reemail.touched) && !registerForm.controls.reemail.valid\" class=\"err\">\n              <div *ngIf=\"registerForm.controls.reemail.errors && registerForm.controls.reemail.errors.required\">\n                <i class=\"fa fa-exclamation-circle\"></i> Please re-enter your email\n              </div>\n              <div *ngIf=\"registerForm.controls.reemail.errors && registerForm.controls.reemail.errors.notMatch\">\n                <i class=\"fa fa-exclamation-circle\"></i> Your passwords don't match\n              </div>\n            </div>\n          </div>\n\n          <div class=\"input-group\">\n            <label for=\"password\">\n              Password\n            </label>\n            <input type=\"password\" placeholder=\"Please enter you password\" name=\"password\"\n              id=\"password\" ngControl=\"password\">\n              <div [class.active]=\"(submitted || registerForm.controls.password.touched)\n                && !registerForm.controls.password.valid\" class=\"err\">\n                <div *ngIf=\"registerForm.controls.password.errors && registerForm.controls.password.errors.required\">\n                  <i class=\"fa fa-exclamation-circle\"></i> Please enter your password\n                </div>\n                <div *ngIf=\"registerForm.controls.password.errors && registerForm.controls.password.errors.minimum\">\n                  <i class=\"fa fa-exclamation-circle\"></i> Your password must have at least 6 characters\n                </div>\n              </div>\n\n            <div class=\"tip\">\n              <i class=\"fa fa-info-circle\"></i>\n              Password must have at least 6 characters\n            </div>\n          </div>\n          <div class=\"buttons\">\n            <button class=\"btn\" [class.submitting]=\"submitting\">\n              <span>Register</span>\n            </button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof UserService_1.UserService !== 'undefined' && UserService_1.UserService) === 'function' && _c) || Object, (typeof (_d = typeof UserValidators_1.UserValidators !== 'undefined' && UserValidators_1.UserValidators) === 'function' && _d) || Object, (typeof (_e = typeof AppService_1.AppService !== 'undefined' && AppService_1.AppService) === 'function' && _e) || Object])
    ], Register);
    return Register;
    var _a, _b, _c, _d, _e;
})();
exports.Register = Register;
//# sourceMappingURL=register.js.map
