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
var rxjs_1 = require('rxjs');
var ionic_1 = require('ionic-framework/ionic');
var AppService = (function () {
    function AppService(Platform) {
        this.Platform = Platform;
        if (this.Platform.is('android') || this.Platform.is('ios')) {
            if (this.Platform.is('android')) {
                this.isAndroid = true;
            }
            this.isIonic = true;
            jQuery('body').addClass('ionic');
        }
        if (rxjs_1.Observable) {
            this.overlayObservable = rxjs_1.Observable
                .create(function (observer) {
                return function () { return console.log('disposed'); };
            }).publish();
        }
    }
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.Platform !== 'undefined' && ionic_1.Platform) === 'function' && _a) || Object])
    ], AppService);
    return AppService;
    var _a;
})();
exports.AppService = AppService;
//# sourceMappingURL=AppService.js.map
