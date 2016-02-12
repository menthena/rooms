System.register(['angular2/core', 'ionic-framework/ionic', '../../services/AppService', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ionic_1, AppService_1, router_1;
    var MarketingIndex;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ionic_1_1) {
                ionic_1 = ionic_1_1;
            },
            function (AppService_1_1) {
                AppService_1 = AppService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MarketingIndex = (function () {
                function MarketingIndex(AppService) {
                    this.AppService = AppService;
                    this.isIonic = this.AppService.isIonic;
                }
                MarketingIndex = __decorate([
                    core_1.Component({
                        selector: 'marketing-index',
                        styleUrls: ['styles/marketing.css'],
                        template: "\n  <div *ngIf=\"isIonic\">\n    <ion-slides pager loop=\"true\" autoplay=\"true\">\n      <ion-slide class=\"slide-1\">\n        <div class=\"logo\">Rooms</div>\n        <h2>A quick way to reserve rooms</h2>\n        <a [routerLink]=\"['/Register']\">\n          <button light outline>Register now</button>\n        </a>\n        <div class=\"or\">\n          or kindly login by clicking <a [routerLink]=\"['/Login']\">here</a>\n        </div>\n      </ion-slide>\n\n      <ion-slide class=\"slide-2\">\n        <div class=\"icons\">\n          <i class=\"fa fa-tablet\"></i> <i class=\"fa fa-desktop\"></i> <i class=\"fa fa-mobile\"></i>\n        </div>\n        <h2>Real-time reservation</h2>\n        <p>Reserve a room on any platform and will be reflected to every user's UI.</p>\n      </ion-slide>\n\n      <ion-slide class=\"slide-3\">\n        <div class=\"icons\">\n          <i class=\"fa fa-repeat\"></i> <i class=\"fa fa-calendar-o\"></i>\n        </div>\n        <h2>Recurring reservations</h2>\n        <p>You can reserve a room daily or weekly basis. </p>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div *ngIf=\"!isIonic\">\n    <div class=\"hero\">\n      <div class=\"green-bar\">\n        <div class=\"logo\">Rooms</div>\n        <h2>A quick way to reserve rooms</h2>\n        <a [routerLink]=\"['/Register']\">\n          <button light outline>Register now</button>\n        </a>\n        <div class=\"or\">\n          or kindly login by clicking <a [routerLink]=\"['/Login']\">here</a>\n        </div>\n      </div>\n    </div>\n    <footer>\n      Copyright \u00A9 2016\n    </footer>\n  </div>\n",
                        directives: [router_1.RouterLink, ionic_1.IONIC_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [AppService_1.AppService])
                ], MarketingIndex);
                return MarketingIndex;
            })();
            exports_1("MarketingIndex", MarketingIndex);
        }
    }
});

//# sourceMappingURL=index.js.map
