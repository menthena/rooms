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
var AppService_1 = require('../../services/AppService');
var AppwideOverlay = (function () {
    function AppwideOverlay(AppService) {
        this.AppService = AppService;
        this.isPanelActive = false;
        this.observable = this.AppService.overlayObservable;
    }
    AppwideOverlay.prototype.ngOnInit = function () {
        var _this = this;
        if (this.observable) {
            this.observable
                .connect();
            this.observable
                .subscribe(function (res) {
                if (res.type === 'show') {
                    _this.isPanelActive = true;
                    _this.panelType = res.panelType;
                    _this.message = res.message;
                    _this.id = res.id;
                    setTimeout(function () {
                        _this.isActive = true;
                    }, 100);
                }
            });
        }
    };
    AppwideOverlay.prototype.confirm = function (confirmation) {
        if (confirmation) {
            this.observable
                .subscription
                .next({
                type: 'response',
                data: true,
                id: this.id
            });
        }
        this.hide();
    };
    AppwideOverlay.prototype.hide = function () {
        var _this = this;
        this.isActive = false;
        setTimeout(function () {
            _this.isPanelActive = false;
        }, 100);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AppwideOverlay.prototype, "isPanelActive", void 0);
    AppwideOverlay = __decorate([
        core_1.Component({
            selector: 'appwide-overlay',
            inputs: ['is-panel-active'],
            template: "\n    <div class=\"appwide-overlay\" *ngIf=\"isPanelActive\" [class.active]=\"isActive\">\n      <a (click)=\"hide()\" class=\"pull-right hide-button\">\n        <i class=\"fa fa-times\"></i>\n      </a>\n      <div class=\"box text-center\">\n        <div class=\"inner\">\n          <div>\n            {{ message }}\n          </div>\n          <div *ngIf=\"panelType === 'confirmation'\" class=\"buttons\">\n            <a (click)=\"confirm(true)\" class=\"yes\">Yes</a>\n            <a (click)=\"confirm(false)\">No</a>\n          </div>\n        </div>\n      </div>\n    <div>\n  ",
            styleUrls: ['styles/common/appwide-overlay.css']
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof AppService_1.AppService !== 'undefined' && AppService_1.AppService) === 'function' && _a) || Object])
    ], AppwideOverlay);
    return AppwideOverlay;
    var _a;
})();
exports.AppwideOverlay = AppwideOverlay;
//# sourceMappingURL=appwide-overlay.js.map
