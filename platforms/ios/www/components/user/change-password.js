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
    var ChangePassword;
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
            ChangePassword = (function () {
                function ChangePassword(fb, router, UserService, UserValidators, RouteParams) {
                    var _this = this;
                    this.fb = fb;
                    this.router = router;
                    this.UserService = UserService;
                    this.UserValidators = UserValidators;
                    this.RouteParams = RouteParams;
                    this.changePasswordForm = this.fb.group({
                        oldPassword: ['', this.UserValidators.PasswordValidator],
                        password: ['', this.UserValidators.PasswordValidator],
                        repassword: ['', function (control) {
                                if (!control.value) {
                                    return {
                                        required: true
                                    };
                                }
                                else if (control.value !== _this.changePasswordForm.value.password) {
                                    return {
                                        notMatch: true
                                    };
                                }
                            }]
                    });
                }
                ChangePassword.prototype.submitForm = function () {
                    var _this = this;
                    var changePassword = this.changePasswordForm.value;
                    this.submitted = true;
                    if (this.changePasswordForm.valid) {
                        this.submitting = true;
                        this.invalidCredentials = false;
                        this.UserService.changePassword(changePassword.oldPassword, changePassword.password)
                            .subscribe(function (res) {
                            setTimeout(function () {
                                _this.submitting = false;
                                _this.success = true;
                            }, 250);
                        }, function (err) {
                            setTimeout(function () {
                                _this.submitting = false;
                                if (err.status === 404) {
                                    _this.error = 'Your old password doesn\'t match to our system';
                                }
                                else {
                                    _this.error = 'Server error occured';
                                }
                            }, 250);
                        });
                    }
                };
                ChangePassword = __decorate([
                    core_1.Component({
                        selector: 'change-password',
                        directives: [common_1.NgForm, loading_indicator_1.LoadingIndicator, router_1.RouterLink],
                        styleUrls: ['styles/common/generic-form.css'],
                        template: "\n  <div class=\"generic-form\">\n    <form [ngFormModel]=\"changePasswordForm\" (ngSubmit)=\"submitForm($event)\" novalidate>\n      <fieldset>\n        <legend>Change password</legend>\n        <div class=\"white-bg\">\n          <div *ngIf=\"success\" class=\"success row\">\n            <div class=\"col-xs-1\">\n              <i class=\"fa fa-check\"></i>\n            </div>\n            <div class=\"col-xs-10 success-message\">\n              Successfully changed your password. Click <a [routerLink]=\"['/Accounts']\">here</a>\n              to go back.\n            </div>\n          </div>\n          <div *ngIf=\"!success\">\n            <div class=\"server-err\" [class.active]=\"error\">\n              <i class=\"fa fa-exclamation-circle\"></i> {{ error }}\n            </div>\n            <div class=\"input-group\">\n              <label for=\"oldPassword\">\n                Old password\n              </label>\n              <input type=\"password\" placeholder=\"Please enter your old password\" name=\"oldPassword\"\n                id=\"oldPassword\" ngControl=\"oldPassword\">\n              <div [class.active]=\"(submitted || changePasswordForm.controls.oldPassword.touched)\n                && !changePasswordForm.controls.oldPassword.valid\" class=\"err\">\n                <div *ngIf=\"changePasswordForm.controls.oldPassword.errors && changePasswordForm.controls.oldPassword.errors.required\">\n                  <i class=\"fa fa-exclamation-circle\"></i> Please enter your password\n                </div>\n                <div *ngIf=\"changePasswordForm.controls.oldPassword.errors && changePasswordForm.controls.oldPassword.errors.minimum\">\n                  <i class=\"fa fa-exclamation-circle\"></i> Your password must have at least 6 characters\n                </div>\n              </div>\n            </div>\n\n            <div class=\"input-group\">\n              <label for=\"password\">\n                New password\n              </label>\n              <input type=\"password\" placeholder=\"Please enter your new password\" name=\"password\"\n                id=\"password\" ngControl=\"password\">\n              <div [class.active]=\"(submitted || changePasswordForm.controls.password.touched)\n                && !changePasswordForm.controls.password.valid\" class=\"err\">\n                <div *ngIf=\"changePasswordForm.controls.password.errors && changePasswordForm.controls.password.errors.required\">\n                  <i class=\"fa fa-exclamation-circle\"></i> Please enter your password\n                </div>\n                <div *ngIf=\"changePasswordForm.controls.password.errors && changePasswordForm.controls.password.errors.minimum\">\n                  <i class=\"fa fa-exclamation-circle\"></i> Your password must have at least 6 characters\n                </div>\n              </div>\n            </div>\n            <div class=\"input-group\">\n              <label for=\"password\">\n                Re-enter new password\n              </label>\n              <input type=\"password\" placeholder=\"Please re-enter your new password\" name=\"repassword\"\n                id=\"repassword\" ngControl=\"repassword\">\n              <div [class.active]=\"(submitted || changePasswordForm.controls.repassword.touched)\n                && !changePasswordForm.controls.repassword.valid\" class=\"err\">\n                <div *ngIf=\"changePasswordForm.controls.repassword.errors && changePasswordForm.controls.repassword.errors.required\">\n                  <i class=\"fa fa-exclamation-circle\"></i> Please re-enter your password\n                </div>\n                <div *ngIf=\"changePasswordForm.controls.repassword.errors && changePasswordForm.controls.repassword.errors.notMatch\">\n                  <i class=\"fa fa-exclamation-circle\"></i> Your passwords don't match\n                </div>\n              </div>\n            </div>\n            <div class=\"buttons\">\n              <button class=\"btn\" [class.submitting]=\"submitting\">\n                <span>Change password</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, UserService_1.UserService, UserValidators_1.UserValidators, router_1.RouteParams])
                ], ChangePassword);
                return ChangePassword;
            })();
            exports_1("ChangePassword", ChangePassword);
        }
    }
});

//# sourceMappingURL=change-password.js.map