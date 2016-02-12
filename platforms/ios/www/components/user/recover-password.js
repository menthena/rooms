System.register(['angular2/core', 'angular2/common', 'angular2/router', '../../directives/loading-indicator', '../../services/UserService', '../../validators/UserValidators'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, loading_indicator_1, UserService_1, UserValidators_1;
    var RecoverPassword;
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
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            },
            function (UserValidators_1_1) {
                UserValidators_1 = UserValidators_1_1;
            }],
        execute: function() {
            RecoverPassword = (function () {
                function RecoverPassword(fb, router, UserService, UserValidators) {
                    this.fb = fb;
                    this.router = router;
                    this.UserService = UserService;
                    this.UserValidators = UserValidators;
                    this.recoverPasswordForm = this.fb.group({
                        email: ['', this.UserValidators.EmailValidator]
                    });
                }
                RecoverPassword.prototype.submitRecoverPassword = function () {
                    var _this = this;
                    var login = this.recoverPasswordForm.value;
                    this.submitted = true;
                    if (this.recoverPasswordForm.valid) {
                        this.submitting = true;
                        this.invalidCredentials = false;
                        this.UserService.recoverPassword(login.email)
                            .subscribe(function (res) {
                            setTimeout(function () {
                                _this.submitting = false;
                                _this.success = true;
                            }, 250);
                        }, function (err) {
                            setTimeout(function () {
                                _this.submitting = false;
                            }, 250);
                        });
                    }
                };
                RecoverPassword = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [common_1.NgForm, loading_indicator_1.LoadingIndicator, router_1.RouterLink],
                        styleUrls: ['styles/common/generic-form.css'],
                        template: "\n  <div class=\"generic-form\">\n    <form [ngFormModel]=\"recoverPasswordForm\" (ngSubmit)=\"submitRecoverPassword($event)\" novalidate>\n      <fieldset>\n        <legend>Recover password</legend>\n        <div class=\"white-bg\">\n          <div *ngIf=\"success\" class=\"success row\">\n            <div class=\"col-xs-1\">\n              <i class=\"fa fa-check\"></i>\n            </div>\n            <div class=\"col-xs-10 success-message\">\n              We have sent an email with instructions to recover your password.\n            </div>\n          </div>\n          <div *ngIf=\"!success\">\n            <div class=\"message\">\n              Please enter the email address you have used to register.\n              We will send an email with instructions.\n            </div>\n            <div class=\"server-err\" [class.active]=\"invalidCredentials\">\n              <i class=\"fa fa-exclamation-circle\"></i> Invalid email or password\n            </div>\n            <div class=\"input-group\">\n              <label for=\"email\">\n                Email\n              </label>\n              <input type=\"email\" placeholder=\"Please enter your email\" name=\"email\" id=\"email\"\n                ngControl=\"email\">\n              <div [class.active]=\"(submitted || recoverPasswordForm.controls.email.touched)\n                && !recoverPasswordForm.controls.email.valid\" class=\"err\">\n                <div *ngIf=\"recoverPasswordForm.controls.email.errors && recoverPasswordForm.controls.email.errors.required\">\n                  <i class=\"fa fa-exclamation-circle\"></i> Please enter your email\n                </div>\n                <div *ngIf=\"recoverPasswordForm.controls.email.errors && recoverPasswordForm.controls.email.errors.invalid\">\n                  <i class=\"fa fa-exclamation-circle\"></i> Please enter a valid email\n                </div>\n              </div>\n\n            </div>\n            <div class=\"buttons\">\n              <button class=\"btn\" [class.submitting]=\"submitting\">\n                <span>Recover password</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, UserService_1.UserService, UserValidators_1.UserValidators])
                ], RecoverPassword);
                return RecoverPassword;
            })();
            exports_1("RecoverPassword", RecoverPassword);
        }
    }
});

//# sourceMappingURL=recover-password.js.map