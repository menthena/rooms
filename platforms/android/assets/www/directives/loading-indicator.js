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
var LoadingIndicator = (function () {
    function LoadingIndicator() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], LoadingIndicator.prototype, "mini", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], LoadingIndicator.prototype, "white", void 0);
    LoadingIndicator = __decorate([
        core_1.Component({
            selector: 'loading-indicator',
            inputs: ['mini', 'white'],
            template: "\n  <div class=\"spinner\" [class.mini]=\"mini\" [class.white]=\"white\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n  ",
            styleUrls: ['styles/common/loading-indicator.css']
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingIndicator);
    return LoadingIndicator;
})();
exports.LoadingIndicator = LoadingIndicator;
//# sourceMappingURL=loading-indicator.js.map
