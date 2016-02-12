System.register(['angular2/core', 'rxjs'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, rxjs_1;
    var AppService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            }],
        execute: function() {
            AppService = (function () {
                function AppService() {
                    if (window.cordova) {
                        this.isIonic = true;
                        jQuery('head').append('<link ios-href="vendor/app.ios.css" rel="stylesheet">' +
                            '<link md-href="vendor/app.md.css" rel="stylesheet">');
                    }
                    this.overlayObservable = rxjs_1.Observable
                        .create(function (observer) {
                        return function () { return console.log('disposed'); };
                    }).publish();
                }
                AppService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AppService);
                return AppService;
            })();
            exports_1("AppService", AppService);
        }
    }
});

//# sourceMappingURL=AppService.js.map
