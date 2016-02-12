System.register(['angular2/core', 'angular2/common', 'angular2/router', '../../directives/loading-indicator', '../../validators/UserValidators', '../../services/UserService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, loading_indicator_1, UserValidators_1, UserService_1;
    var ResetPassword;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (loading_indicator_1_1) {
                loading_indicator_1 = loading_indicator_1_1;
            },
            function (UserValidators_1_1) {
                UserValidators_1 = UserValidators_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            }],
        execute: function() {
            ResetPassword = (function () {
                function ResetPassword(fb, router, UserService, UserValidators, RouteParams) {
                    this.fb = fb;
                    this.router = router;
                    this.UserService = UserService;
                    this.UserValidators = UserValidators;
                    this.RouteParams = RouteParams;
                    this.resetPasswordForm = this.fb.group({
                        email: ['', this.UserValidators.EmailValidator],
                        password: ['', this.UserValidators.PasswordValidator]
                    });
                }
                ResetPassword.prototype.submitLoginForm = function () {
                    var _this = this;
                    var resetPassword = this.resetPasswordForm.value;
                    this.submitted = true;
                    if (this.resetPasswordForm.valid) {
                        this.submitting = true;
                        this.invalidCredentials = false;
                        this.UserService.resetPassword(resetPassword.email, resetPassword.password, this.RouteParams.params['id'])
                            .subscribe(function (res) {
                            setTimeout(function () {
                                _this.submitting = false;
                                _this.success = true;
                            }, 250);
                        }, function (err) {
                            setTimeout(function () {
                                _this.submitting = false;
                                if (err.status === 404) {
                                    _this.error = 'Invalid token or email address';
                                }
                                else {
                                    _this.error = 'Server error occured';
                                }
                            }, 250);
                        });
                    }
                };
                ResetPassword = __decorate([
                    core_1.Component({
                        selector: 'reset-password',
                        directives: [common_1.NgForm, loading_indicator_1.LoadingIndicator, router_1.RouterLink],
                        styleUrls: ['styles/common/generic-form.css'],
                        template: "\n  <div class=\"generic-form\">\n    <form [ngFormModel]=\"resetPasswordForm\" (ngSubmit)=\"submitLoginForm($event)\" novalidate>\n      <fieldset>\n        <legend>Reset password</legend>\n        <div class=\"white-bg\">\n          <div *ngIf=\"success\" class=\"success row\">\n            <div class=\"col-xs-1\">\n              <i class=\"fa fa-check\"></i>\n            </div>\n            <div class=\"col-xs-10 success-message\">\n              Successfully changed your password. Click <a [routerLink]=\"['/Login']\">here</a>\n              to login.\n            </div>\n          </div>\n          <div *ngIf=\"!success\">\n            <div class=\"server-err\" [class.active]=\"error\">\n              <i class=\"fa fa-exclamation-circle\"></i> {{ error }}\n            </div>\n            <div class=\"input-group\">\n              <label for=\"email\">\n                Email\n              </label>\n              <input type=\"email\" placeholder=\"Please enter your email\" name=\"email\" id=\"email\"\n                ngControl=\"email\">\n              <div [class.active]=\"(submitted || resetPasswordForm.controls.email.touched)\n                && !resetPasswordForm.controls.email.valid\" class=\"err\">\n                <div *ngIf=\"resetPasswordForm.controls.email.errors && resetPasswordForm.controls.email.errors.required\">\n                  <i class=\"fa fa-exclamation-circle\"></i> Please enter your email\n                </div>\n                <div *ngIf=\"resetPasswordForm.controls.email.errors && resetPasswordForm.controls.email.errors.invalid\">\n                  <i class=\"fa fa-exclamation-circle\"></i> Please enter a valid email\n                </div>\n              </div>\n\n            </div>\n            <div class=\"input-group\">\n              <label for=\"password\">\n                Password\n              </label>\n              <input type=\"password\" placeholder=\"Please enter your password\" name=\"password\"\n                id=\"password\" ngControl=\"password\">\n              <div [class.active]=\"(submitted || resetPasswordForm.controls.password.touched)\n                && !resetPasswordForm.controls.password.valid\" class=\"err\">\n                <div *ngIf=\"resetPasswordForm.controls.password.errors && resetPasswordForm.controls.password.errors.required\">\n                  <i class=\"fa fa-exclamation-circle\"></i> Please enter your password\n                </div>\n                <div *ngIf=\"resetPasswordForm.controls.password.errors && resetPasswordForm.controls.password.errors.minimum\">\n                  <i class=\"fa fa-exclamation-circle\"></i> Your password must have at least 6 characters\n                </div>\n              </div>\n            </div>\n            <div class=\"buttons\">\n              <button class=\"btn\" [class.submitting]=\"submitting\">\n                <span>Reset password</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, UserService_1.UserService, UserValidators_1.UserValidators, router_1.RouteParams])
                ], ResetPassword);
                return ResetPassword;
            })();
            exports_1("ResetPassword", ResetPassword);
        }
    }
});

//# sourceMappingURL=reset-password.js.map
