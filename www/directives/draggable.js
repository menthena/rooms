System.register(['angular2/core', '../services/DesignService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, DesignService_1;
    var Draggable;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (DesignService_1_1) {
                DesignService_1 = DesignService_1_1;
            }],
        execute: function() {
            Draggable = (function () {
                function Draggable(elementRef, DesignService) {
                    this.elementRef = elementRef;
                    this.DesignService = DesignService;
                }
                Draggable.prototype.ngOnInit = function () {
                    var designMode = this.DesignService.designModeState;
                    var nativeElement = this.elementRef.nativeElement;
                    if (designMode) {
                        var options = {};
                        if (this.clone) {
                            options = {
                                opacity: 0.8,
                                helper: 'clone'
                            };
                        }
                        else if (this.containment) {
                            options = {
                                containment: this.containment
                            };
                        }
                        jQuery(nativeElement).draggable(options);
                    }
                    else {
                        if (jQuery(nativeElement).hasClass('ui-draggable')) {
                            jQuery(nativeElement).draggable('destroy');
                        }
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Draggable.prototype, "clone", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Draggable.prototype, "containment", void 0);
                Draggable = __decorate([
                    core_1.Directive({
                        selector: '[draggable-element]',
                        properties: ['clone', 'containment']
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, DesignService_1.DesignService])
                ], Draggable);
                return Draggable;
            })();
            exports_1("Draggable", Draggable);
            ;
        }
    }
});

//# sourceMappingURL=draggable.js.map
