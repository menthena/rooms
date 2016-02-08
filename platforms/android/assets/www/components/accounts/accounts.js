System.register(['angular2/core', 'angular2/router', '../../directives/loading-indicator', '../../services/UserService', '../../services/CalendarService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, loading_indicator_1, UserService_1, CalendarService_1;
    var Accounts;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
            function (CalendarService_1_1) {
                CalendarService_1 = CalendarService_1_1;
            }],
        execute: function() {
            Accounts = (function () {
                function Accounts(UserService, router, CalendarService) {
                    this.UserService = UserService;
                    this.router = router;
                    this.CalendarService = CalendarService;
                    this.isLoading = true;
                    if (!this.UserService.isLogged) {
                        this.router.navigate(['Login']);
                    }
                }
                Accounts.prototype.integrateWithGoogle = function () {
                    var _this = this;
                    this.CalendarService.authorize(function (res) {
                        if (res) {
                            _this.userData.googleToken = res.googleToken;
                        }
                    });
                };
                Accounts.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userData = this.UserService.userData;
                    setTimeout(function () {
                        _this.isLoading = false;
                    }, 250);
                };
                Accounts = __decorate([
                    core_1.Component({
                        selector: 'accounts',
                        directives: [loading_indicator_1.LoadingIndicator, router_1.RouterLink],
                        styleUrls: ['styles/accounts.css'],
                        template: "\n    <loading-indicator *ngIf=\"isLoading\"></loading-indicator>\n    <div *ngIf=\"!isLoading\" class=\"container\">\n      <h1>\n        Accounts\n      </h1>\n      <div class=\"account-info\">\n        <div class=\"row\">\n          <div class=\"col-xs-2 name\">\n            Name\n          </div>\n          <div class=\"col-xs-3\">\n            {{ userData.name }}\n          </div>\n          <div class=\"col-xs-1\">\n          </div>\n          <div class=\"col-xs-2 name\">\n            Company\n          </div>\n          <div class=\"col-xs-3\">\n            {{ userData.companyName }}\n          </div>\n          <div class=\"col-xs-1\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-2 name\">\n            Password\n          </div>\n          <div class=\"col-xs-3\">\n            ******* [<a [routerLink]=\"['/ChangePassword']\">Change</a>]\n          </div>\n          <div class=\"col-xs-1\">\n          </div>\n          <div class=\"col-xs-2 name\">\n            Email\n          </div>\n          <div class=\"col-xs-3\">\n            {{ userData.email }}\n          </div>\n          <div class=\"col-xs-1\">\n          </div>\n        </div>\n      </div>\n      <h1>\n        Google Integration\n      </h1>\n      <div class=\"account-info\">\n        <div *ngIf=\"userData.googleToken\">\n          Integrated with Google\n        </div>\n        <div *ngIf=\"!userData.googleToken\">\n          <a (click)=\"integrateWithGoogle()\">Integrate with google</a>\n        </div>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [UserService_1.UserService, router_1.Router, CalendarService_1.CalendarService])
                ], Accounts);
                return Accounts;
            })();
            exports_1("Accounts", Accounts);
        }
    }
});

//# sourceMappingURL=accounts.js.map
