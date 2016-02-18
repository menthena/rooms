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
var loading_indicator_1 = require('../../directives/loading-indicator');
var UserService_1 = require('../../services/UserService');
var CalendarService_1 = require('../../services/CalendarService');
var Accounts = (function () {
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
        // this.CalendarService.fetchCalendars();
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
        __metadata('design:paramtypes', [(typeof (_a = typeof UserService_1.UserService !== 'undefined' && UserService_1.UserService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof CalendarService_1.CalendarService !== 'undefined' && CalendarService_1.CalendarService) === 'function' && _c) || Object])
    ], Accounts);
    return Accounts;
    var _a, _b, _c;
})();
exports.Accounts = Accounts;
//# sourceMappingURL=accounts.js.map
