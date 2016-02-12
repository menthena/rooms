System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PlaceElement;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PlaceElement = (function () {
                function PlaceElement(elementRef) {
                    this.elementRef = elementRef;
                }
                PlaceElement.prototype.ngOnInit = function () {
                    var nativeElement = this.elementRef.nativeElement;
                    var wrapper = jQuery(nativeElement).find('.wrapper').eq(0);
                    var left = this.data.elementPositionX + '%';
                    var placement = {};
                    if (this.placeType === 'modal') {
                        if (this.data.elementPositionX > 70) {
                        }
                    }
                    else {
                        placement = {
                            width: this.data.elementWidth + '%',
                            top: this.data.elementPositionY + '%'
                        };
                        if (this.data.elementHeight > 0) {
                            placement.height = this.data.elementHeight + 'px';
                        }
                        else if (this.data.elementType !== 'line') {
                            placement.height = '55px';
                        }
                        placement.left = left;
                        if (this.data.elementType === 'icon') {
                            placement.width = 'inherit';
                            placement.height = 'inherit';
                        }
                    }
                    jQuery(wrapper).css(placement);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PlaceElement.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PlaceElement.prototype, "placeType", void 0);
                PlaceElement = __decorate([
                    core_1.Directive({
                        selector: '[place-element]',
                        inputs: ['data'],
                        properties: ['placeType']
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], PlaceElement);
                return PlaceElement;
            })();
            exports_1("PlaceElement", PlaceElement);
            ;
        }
    }
});

//# sourceMappingURL=place-element.js.map
