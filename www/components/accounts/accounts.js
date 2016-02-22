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
var AppService_1 = require('../../services/AppService');
var CalendarService_1 = require('../../services/CalendarService');
var ionic_1 = require('ionic-framework/ionic');
var Accounts = (function () {
    function Accounts(UserService, router, CalendarService, AppService) {
        this.UserService = UserService;
        this.router = router;
        this.CalendarService = CalendarService;
        this.AppService = AppService;
        this.isIonic = this.AppService.isIonic;
        this.isLoading = true;
        this.isLogged = this.UserService.isLogged;
        this.userData = this.UserService.userData;
    }
    Accounts.prototype.integrateWithGoogle = function () {
        var _this = this;
        this.CalendarService.authorize(function (res) {
            if (res) {
                _this.userData.googleToken = res.googleToken;
            }
        });
    };
    Accounts.prototype.goToChangePassword = function () {
        // [routerLink]="['/ChangePassword']"
    };
    Accounts.prototype.ngOnInit = function () {
        var _this = this;
        // this.CalendarService.fetchCalendars();
        if (!this.isLogged) {
            this.router.navigate(['Login']);
        }
        setTimeout(function () {
            _this.isLoading = false;
        }, 250);
    };
    Accounts = __decorate([
        core_1.Component({
            selector: 'accounts',
            providers: [],
            directives: [loading_indicator_1.LoadingIndicator, router_1.RouterLink, ionic_1.IONIC_DIRECTIVES],
            styleUrls: ['styles/accounts.css'],
            template: "\n    <loading-indicator *ngIf=\"isLoading\"></loading-indicator>\n    <div *ngIf=\"!isLoading\" class=\"container\">\n      <div *ngIf=\"isIonic\">\n        <ion-list>\n          <ion-item>\n            <ion-row>\n              <ion-col>Name</ion-col>\n              <ion-col text-right><b>{{ userData.name }}</b></ion-col>\n            </ion-row>\n          </ion-item>\n          <ion-item>\n            <ion-row>\n              <ion-col>Company</ion-col>\n              <ion-col text-right><b>{{ userData.companyName }}</b></ion-col>\n            </ion-row>\n          </ion-item>\n          <ion-item>\n            <ion-row>\n              <ion-col>Password</ion-col>\n              <ion-col text-right><b>******</b></ion-col>\n            </ion-row>\n          </ion-item>\n          <ion-item>\n            <ion-row>\n              <ion-col>Email</ion-col>\n              <ion-col text-right><b>{{ userData.email }}</b></ion-col>\n            </ion-row>\n          </ion-item>\n          <ion-item>\n            <ion-label>Google Calendar Integrate</ion-label>\n            <ion-toggle checked=\"false\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n      </div>\n      <div *ngIf=\"!isIonic\">\n        <h1>\n          Accounts\n        </h1>\n        <div class=\"account-info\">\n          <div class=\"row\">\n            <div class=\"col-md-2 name\">\n              Name\n            </div>\n            <div class=\"col-md-3\" [attr.id]=\"'userName'\">\n              {{ userData.name }}\n            </div>\n            <div class=\"col-md-1\">\n            </div>\n            <div class=\"col-md-2 name\">\n              Company\n            </div>\n            <div class=\"col-md-3\">\n              {{ userData.companyName }}\n            </div>\n            <div class=\"col-md-1\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-2 name\">\n              Password\n            </div>\n            <div class=\"col-md-3\">\n              ******* [<a (click)=\"goToChangePassword()\">Change</a>]\n            </div>\n            <div class=\"col-md-1\">\n            </div>\n            <div class=\"col-md-2 name\">\n              Email\n            </div>\n            <div class=\"col-md-3\">\n              {{ userData.email }}\n            </div>\n            <div class=\"col-md-1\">\n            </div>\n          </div>\n        </div>\n        <h1>\n          Calendar\n        </h1>\n        <div class=\"account-info\">\n          <div>\n            <div *ngIf=\"userData.googleToken\">\n              Integrated with Google\n            </div>\n            <div *ngIf=\"!userData.googleToken\">\n              <a (click)=\"integrateWithGoogle()\">Integrate with google</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof UserService_1.UserService !== 'undefined' && UserService_1.UserService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof CalendarService_1.CalendarService !== 'undefined' && CalendarService_1.CalendarService) === 'function' && _c) || Object, (typeof (_d = typeof AppService_1.AppService !== 'undefined' && AppService_1.AppService) === 'function' && _d) || Object])
    ], Accounts);
    return Accounts;
    var _a, _b, _c, _d;
})();
exports.Accounts = Accounts;
//# sourceMappingURL=accounts.js.map
