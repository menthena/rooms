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
var ionic_1 = require('ionic-framework/ionic');
var AppService_1 = require('../../services/AppService');
var router_1 = require('angular2/router');
var MarketingIndex = (function () {
    function MarketingIndex(AppService) {
        this.AppService = AppService;
        this.isIonic = this.AppService.isIonic;
        this.isAndroid = this.AppService.isAndroid;
    }
    MarketingIndex = __decorate([
        core_1.Component({
            selector: 'marketing-index',
            providers: [AppService_1.AppService],
            styleUrls: ['styles/marketing.css'],
            template: "\n  <div *ngIf=\"isIonic\">\n    <ion-slides pager loop=\"true\" autoplay=\"true\">\n      <ion-slide class=\"slide-1\">\n        <div class=\"logo\">Rooms</div>\n        <h2>A quick way to reserve rooms</h2>\n        <a [routerLink]=\"['/Register']\">\n          <button light [ngClass]=\"{'button-outline button-outline-light': !isAndroid}\">Register now</button>\n        </a>\n        <div class=\"or\">\n          or kindly login by clicking <a [routerLink]=\"['/Login']\">here</a>\n        </div>\n      </ion-slide>\n\n      <ion-slide class=\"slide-2\">\n        <div class=\"icons\">\n          <i class=\"fa fa-tablet\"></i> <i class=\"fa fa-desktop\"></i> <i class=\"fa fa-mobile\"></i>\n        </div>\n        <h2>Real-time reservation</h2>\n        <p>Reserve a room on any platform and will be reflected to every user's UI within a milli-second.</p>\n      </ion-slide>\n\n      <ion-slide class=\"slide-3\">\n        <div class=\"icons\">\n          <i class=\"fa fa-repeat\"></i> <i class=\"fa fa-calendar-o\"></i>\n        </div>\n        <h2>Recurring reservations</h2>\n        <p>You can reserve a room daily or weekly basis. </p>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div *ngIf=\"!isIonic\">\n    <div class=\"hero\">\n      <div class=\"green-bar\">\n        <div class=\"logo\">Rooms</div>\n        <h2>A quick way to reserve rooms</h2>\n        <a [routerLink]=\"['/Register']\">\n          <button light outline>Register now</button>\n        </a>\n        <div class=\"or\">\n          or kindly login by clicking <a [routerLink]=\"['/Login']\">here</a>\n        </div>\n      </div>\n    </div>\n    <footer>\n      Copyright \u00A9 2016\n    </footer>\n  </div>\n",
            directives: [router_1.RouterLink, ionic_1.IONIC_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof AppService_1.AppService !== 'undefined' && AppService_1.AppService) === 'function' && _a) || Object])
    ], MarketingIndex);
    return MarketingIndex;
    var _a;
})();
exports.MarketingIndex = MarketingIndex;
//# sourceMappingURL=index.js.map
