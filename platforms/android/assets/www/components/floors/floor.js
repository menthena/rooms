System.register(['angular2/core', 'angular2/common', '../../services/FloorElementsService', './room', '../../constants', '../../services/FloorService', './placeholder', './line', './icon', '../../directives/loading-indicator', '../../directives/place-element', '../../directives/droppable', '../../services/DesignService', '../../services/ReservationService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, FloorElementsService_1, room_1, constants_1, FloorService_1, placeholder_1, line_1, icon_1, loading_indicator_1, place_element_1, droppable_1, DesignService_1, ReservationService_1;
    var Floor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (FloorElementsService_1_1) {
                FloorElementsService_1 = FloorElementsService_1_1;
            },
            function (room_1_1) {
                room_1 = room_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (FloorService_1_1) {
                FloorService_1 = FloorService_1_1;
            },
            function (placeholder_1_1) {
                placeholder_1 = placeholder_1_1;
            },
            function (line_1_1) {
                line_1 = line_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            },
            function (loading_indicator_1_1) {
                loading_indicator_1 = loading_indicator_1_1;
            },
            function (place_element_1_1) {
                place_element_1 = place_element_1_1;
            },
            function (droppable_1_1) {
                droppable_1 = droppable_1_1;
            },
            function (DesignService_1_1) {
                DesignService_1 = DesignService_1_1;
            },
            function (ReservationService_1_1) {
                ReservationService_1 = ReservationService_1_1;
            }],
        execute: function() {
            Floor = (function () {
                function Floor(floorElementsService, changeRef, DesignService, ReservationService, fb, floorService) {
                    this.floorElementsService = floorElementsService;
                    this.changeRef = changeRef;
                    this.DesignService = DesignService;
                    this.ReservationService = ReservationService;
                    this.fb = fb;
                    this.floorService = floorService;
                    this.floorElements = [];
                    this.floorElementsObservable = this.floorElementsService.getObservable();
                    this.floorElementsObservable.connect();
                    this.designMode = DesignService.designModeState;
                    this.isLoading = false;
                }
                Floor.prototype.switchEditMode = function () {
                    this.editMode = true;
                };
                Floor.prototype.cancelEditFloorNameForm = function (e) {
                    e.preventDefault();
                    this.editMode = false;
                };
                Floor.prototype.submitEditFloorNameForm = function (e) {
                    var _this = this;
                    e.preventDefault();
                    this.isLoading = true;
                    this.floorService.updateFloor(this.floor.floorID, {
                        floorName: this.editFloorNameForm.value.floorName
                    })
                        .delay(500)
                        .subscribe(function (res) {
                        _this.editMode = false;
                        _this.isLoading = false;
                        _this.floor.floorName = _this.editFloorNameForm.value.floorName;
                    });
                };
                Floor.prototype.fetch = function (floorID) {
                    var _this = this;
                    this.isLoading = true;
                    this.floorElementsService.fetchElementsByFloorID(floorID)
                        .subscribe(function (res) {
                        var arr = res.json().data;
                        _this.floorElements = arr;
                        _this.isLoading = false;
                        _this.changeRef.markForCheck();
                    });
                };
                Floor.prototype.ngOnInit = function () {
                    var _this = this;
                    var socket = io.connect(constants_1.SOCKET_URL);
                    socket.on('elements', function (res) {
                        if (!_this.DesignService.designModeState) {
                            var index = _.findIndex(_this.floorElements, { elementID: res.elementID });
                            if (res.floorID === _this.floor.floorID) {
                                if (index === -1) {
                                    _this.floorElements.push(res);
                                }
                                else {
                                    _this.floorElements[index] = res;
                                }
                            }
                        }
                    });
                    socket.on('reservations', function (res) {
                        if (!_this.DesignService.designModeState) {
                            _this.ReservationService.fetchReservations()
                                .subscribe(function () {
                                _this.reservations = _this.ReservationService.reservations;
                                _this.changeRef.markForCheck();
                            });
                        }
                    });
                    this.floorElementsObservable
                        .subscribe(function (res) {
                        if (res.type === 'data') {
                            _this.isLoading = false;
                            _this.floorElements = res.data;
                        }
                        else {
                            _this.isLoading = true;
                        }
                        _this.changeRef.detectChanges();
                    });
                    this.fetch(this.floor.floorID);
                    this.editFloorNameForm = this.fb.group({
                        floorName: [this.floor.floorName, common_1.Validators.required]
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Floor.prototype, "floor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Floor.prototype, "isLoading", void 0);
                Floor = __decorate([
                    core_1.Component({
                        selector: 'floor',
                        providers: [FloorElementsService_1.FloorElementsService],
                        directives: [room_1.Room, icon_1.Icon, place_element_1.PlaceElement, placeholder_1.Placeholder, line_1.Line, droppable_1.Droppable, loading_indicator_1.LoadingIndicator],
                        styleUrls: ['styles/floors/floor.css', 'styles/floors/floors.css'],
                        template: "\n  <div [ngClass]=\"{'design-mode': designMode}\">\n    <ul class=\"list-inline\">\n      <li>\n        <h1 *ngIf=\"!editMode\">\n          {{ floor.floorName }}\n          <span *ngIf=\"designMode\">\n            <a (click)=\"switchEditMode()\" class=\"button\"><i class=\"fa fa-pencil\"></i></a>\n          </span>\n        </h1>\n        <div *ngIf=\"editMode\" class=\"header\">\n          <form [ngFormModel]=\"editFloorNameForm\">\n            <input type=\"text\" name=\"floorName\" id=\"floorName\" ngControl=\"floorName\">\n            <button (click)=\"submitEditFloorNameForm($event)\" type=\"submit\" class=\"button\"><i class=\"fa fa-check\"></i></button>\n            <button (click)=\"cancelEditFloorNameForm($event)\" class=\"button\"><i class=\"fa fa-times\"></i></button>\n          </form>\n        </div>\n      </li>\n      <li>\n        <loading-indicator *ngIf=\"isLoading\" mini=\"true\"></loading-indicator>\n      </li>\n    </ul>\n    <div [attr.id]=\"'floor' + floor.floorID\" class=\"floor\" droppable-element\n      [attr.data-id]=\"floor.floorID\" [ngClass]=\"{loading: isLoading}\">\n      <div class=\"inner\">\n        <div *ngFor=\"#element of floorElements\" [ngSwitch]=\"element.elementType\">\n          <room *ngSwitchWhen=\"'room'\" [data]=\"element\" place-element></room>\n          <line *ngSwitchWhen=\"'line'\" [data]=\"element\" place-element></line>\n          <placeholder *ngSwitchWhen=\"'placeholder'\" [data]=\"element\" place-element></placeholder>\n          <icon *ngSwitchDefault [data]=\"element\" place-element></icon>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [FloorElementsService_1.FloorElementsService, core_1.ChangeDetectorRef, DesignService_1.DesignService, ReservationService_1.ReservationService, common_1.FormBuilder, FloorService_1.FloorService])
                ], Floor);
                return Floor;
            })();
            exports_1("Floor", Floor);
        }
    }
});

//# sourceMappingURL=floor.js.map
