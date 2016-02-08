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
    var DesignService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            }],
        execute: function() {
            DesignService = (function () {
                function DesignService() {
                    this.designObservable = rxjs_1.Observable
                        .create(function (observer) {
                        return function () { return console.log('disposed'); };
                    }).publish();
                }
                DesignService.prototype.getPercentage = function (value, total) {
                    var percentage = (value / total) * 100;
                    if (percentage < 0) {
                        return 0;
                    }
                    return percentage;
                };
                DesignService.prototype.getPosition = function (event, draggable) {
                    var element = jQuery(event.target);
                    var elementWidth = element.width();
                    var elementHeight = element.height();
                    var elementOffset = element.offset();
                    var x = this.getPercentage(draggable.offset.left - 8 - elementOffset.left, elementWidth);
                    var y = this.getPercentage(draggable.offset.top - 8 - elementOffset.top, elementHeight);
                    if (x > 85) {
                        x = 85;
                    }
                    if (y > 83) {
                        y = 83;
                    }
                    return {
                        x: x,
                        y: y
                    };
                };
                DesignService.prototype.getDimension = function (event, draggable) {
                    var element = jQuery(event.target);
                    var elementWidth = element.width();
                    return {
                        width: this.getPercentage(elementWidth, jQuery('.ui-droppable').width()),
                        height: draggable.helper.height()
                    };
                };
                DesignService.prototype.getObservable = function () {
                    return this.designObservable;
                };
                DesignService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DesignService);
                return DesignService;
            })();
            exports_1("DesignService", DesignService);
        }
    }
});

//# sourceMappingURL=DesignService.js.map
