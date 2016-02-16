System.register(['angular2/core', '../../services/ReservationService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ReservationService_1;
    var Overlay;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ReservationService_1_1) {
                ReservationService_1 = ReservationService_1_1;
            }],
        execute: function() {
            Overlay = (function () {
                function Overlay(ReservationService) {
                    this.ReservationService = ReservationService;
                    this.reservationObservable = this.ReservationService.getObservable();
                }
                Overlay.prototype.ngOnInit = function () {
                    var _this = this;
                    this.reservationObservable
                        .connect();
                    this.reservationObservable
                        .subscribe(function (res) {
                        if (typeof res === 'string') {
                            _this.isPanelActive = true;
                            setTimeout(function () {
                                _this.isActive = true;
                            }, 100);
                        }
                        else {
                            _this.isActive = false;
                            setTimeout(function () {
                                _this.isPanelActive = false;
                            }, 100);
                        }
                    });
                };
                Overlay = __decorate([
                    core_1.Component({
                        selector: 'overlay',
                        providers: [],
                        template: "\n    <div class=\"overlay\" *ngIf=\"isPanelActive\" [class.active]=\"isActive\">\n    <div>\n  ",
                        styleUrls: ['styles/common/overlay.css']
                    }), 
                    __metadata('design:paramtypes', [ReservationService_1.ReservationService])
                ], Overlay);
                return Overlay;
            })();
            exports_1("Overlay", Overlay);
        }
    }
});

//# sourceMappingURL=overlay.js.map
