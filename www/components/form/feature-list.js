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
var constants_1 = require('../../config/constants');
var button_1 = require('../form/button');
var FeatureList = (function () {
    function FeatureList() {
        this.features = constants_1.FEATURES_DATA;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FeatureList.prototype, "controlName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FeatureList.prototype, "formModel", void 0);
    FeatureList = __decorate([
        core_1.Component({
            selector: 'feature-list',
            directives: [button_1.Button],
            inputs: ['formModel'],
            properties: ['controlName'],
            template: "\n  <ul class=\"list-unstyled features list-inline\">\n    <li *ngFor=\"#feature of features\">\n      <input [controlName]=\"controlName\" [formModel]=\"formModel\"\n        type=\"checkbox\" [attr.id]=\"feature.value\" button [attr.value]=\"feature.value\"\n        >\n\n      <label [attr.for]=\"feature.value\"><i></i><span>{{ feature.text }}</span></label>\n    </li>\n  </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FeatureList);
    return FeatureList;
})();
exports.FeatureList = FeatureList;
;
//# sourceMappingURL=feature-list.js.map
