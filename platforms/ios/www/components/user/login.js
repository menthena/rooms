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
    var Login;
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
            Login = (function () {
                function Login(fb, router, UserService, UserValidators) {
                    this.fb = fb;
                    this.router = router;
                    this.UserService = UserService;
                    this.UserValidators = UserValidators;
                    this.loggedChange = new core_1.EventEmitter();
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
                        this.loggedChange
                            .next(1);
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
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Login.prototype, "loggedChange", void 0);
                Login = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [common_1.NgForm, loading_indicator_1.LoadingIndicator, router_1.RouterLink],
                        outputs: ['loggedChange'],
                        styleUrls: ['styles/common/generic-form.css'],
                        template: "\n  <div class=\"generic-form animated slideInLeft\">\n    <form [ngFormModel]=\"loginForm\" (ngSubmit)=\"submitLoginForm($event)\" novalidate>\n      <fieldset>\n        <legend>Login</legend>\n        <div class=\"white-bg\">\n          <div class=\"server-err\" [class.active]=\"invalidCredentials\">\n            <i class=\"fa fa-exclamation-circle\"></i> Invalid email or password\n          </div>\n          <div class=\"input-group\">\n            <label for=\"email\">\n              Email\n            </label>\n            <input type=\"email\" placeholder=\"Please enter your email\" name=\"email\" id=\"email\"\n              ngControl=\"email\">\n            <div [class.active]=\"(submitted || loginForm.controls.email.touched) && !loginForm.controls.email.valid\" class=\"err\">\n              <div *ngIf=\"loginForm.controls.email.errors && loginForm.controls.email.errors.required\">\n                <i class=\"fa fa-exclamation-circle\"></i> Please enter your email\n              </div>\n              <div *ngIf=\"loginForm.controls.email.errors && loginForm.controls.email.errors.invalid\">\n                <i class=\"fa fa-exclamation-circle\"></i> Please enter a valid email\n              </div>\n            </div>\n\n          </div>\n          <div class=\"input-group\">\n            <label for=\"password\">\n              Password\n            </label>\n            <input type=\"password\" placeholder=\"Please enter your password\" name=\"password\"\n              id=\"password\" ngControl=\"password\">\n            <div [class.active]=\"(submitted || loginForm.controls.password.touched) && !loginForm.controls.password.valid\" class=\"err\">\n                <i class=\"fa fa-exclamation-circle\"></i> Please enter your password\n            </div>\n          </div>\n          <div class=\"buttons\">\n            <button class=\"btn\" [class.submitting]=\"submitting\">\n              <span>Log in</span>\n            </button>\n          </div>\n          <div class=\"sub-form\">\n            You forgot your password? It is okay, we all have been there. <a [routerLink]=\"['/RecoverPassword']\">Recover password</a>.\n            <div>\n              OR you can <a [routerLink]=\"['/Register']\">register</a> kindly.\n            </div>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, UserService_1.UserService, UserValidators_1.UserValidators])
                ], Login);
                return Login;
            })();
            exports_1("Login", Login);
        }
    }
});

//# sourceMappingURL=login.js.map
