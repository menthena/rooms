System.register(['angular2/core', 'rxjs', '../../services/ReservationService', '../design/edit-element', '../../directives/resizable', '../../directives/draggable', '../../directives/popover', '../../directives/place-element', '../reservation/reservation-modal', '../../services/FloorElementsService', '../../services/DesignService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, rxjs_1, ReservationService_1, edit_element_1, resizable_1, draggable_1, popover_1, place_element_1, reservation_modal_1, FloorElementsService_1, DesignService_1;
    var Room;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            },
            function (ReservationService_1_1) {
                ReservationService_1 = ReservationService_1_1;
            },
            function (edit_element_1_1) {
                edit_element_1 = edit_element_1_1;
            },
            function (resizable_1_1) {
                resizable_1 = resizable_1_1;
            },
            function (draggable_1_1) {
                draggable_1 = draggable_1_1;
            },
            function (popover_1_1) {
                popover_1 = popover_1_1;
            },
            function (place_element_1_1) {
                place_element_1 = place_element_1_1;
            },
            function (reservation_modal_1_1) {
                reservation_modal_1 = reservation_modal_1_1;
            },
            function (FloorElementsService_1_1) {
                FloorElementsService_1 = FloorElementsService_1_1;
            },
            function (DesignService_1_1) {
                DesignService_1 = DesignService_1_1;
            }],
        execute: function() {
            Room = (function () {
                function Room(elementRef, ReservationService, DesignService, FloorElementsService, changeRef) {
                    this.elementRef = elementRef;
                    this.ReservationService = ReservationService;
                    this.FloorElementsService = FloorElementsService;
                    this.changeRef = changeRef;
                    this.reservationFilterObserver = ReservationService.getReservationFilterObserver();
                    this.reservationObserver = ReservationService.getObservable();
                    this.isActive = true;
                    this.isMatch = true;
                    this.designObservable = DesignService.getObservable();
                    this.designMode = DesignService.designModeState;
                }
                Room.prototype.openReservationModal = function () {
                    this.reservationModalOpened = true;
                    this.checkAvailability();
                    this.reservationObserver
                        .subscription
                        .next(this.data.elementID);
                };
                Room.prototype.handleEditReservation = function () {
                    this.openReservationModal();
                };
                Room.prototype.destroy = function () {
                    this.FloorElementsService
                        .deleteElement(this.data.floorID, this.data.elementID);
                };
                Room.prototype.editElement = function () {
                    this.designObservable
                        .subscription
                        .next({
                        type: 'edit',
                        data: this.data.elementID
                    });
                };
                Room.prototype.getActiveReservation = function (res) {
                    if (res) {
                        this.activeReservation = _.find(this.reservations, { reservationID: res.reservationID });
                    }
                };
                Room.prototype.checkAvailability = function () {
                    var _this = this;
                    this.isMatch = true;
                    this.isActive = true;
                    this.activeReservation = undefined;
                    if (!this.designMode && this.filter) {
                        rxjs_1.Observable.fromArray(this.reservations)
                            .filter(function (res) {
                            return res.elementID === _this.data.elementID;
                        })
                            .filter(function (res) {
                            return moment.utc(_this.filter.reservationDate).diff(res.reservationDate) >= 0 ||
                                moment.utc(_this.filter.reservationEndDate).diff(res.reservationDate) >= 0;
                        })
                            .filter(function (res) {
                            return moment.utc(_this.filter.reservationDate).diff(res.reservationEndDate) < 0;
                        })
                            .subscribe(function (res) {
                            _this.getActiveReservation(res);
                            _this.isActive = false;
                        });
                        if (this.filter.capacity < this.data.capacity) {
                            this.isMatch = false;
                        }
                        if (this.filter.features) {
                            this.filter.features.map(function (res) {
                                if (_this.data.features.indexOf(res) === -1) {
                                    console.log(res);
                                    _this.isMatch = false;
                                }
                            });
                        }
                        this.changeRef.detectChanges();
                    }
                };
                Room.prototype.handleClick = function () {
                    if (!this.designMode && this.isActive && this.isMatch) {
                        this.openReservationModal();
                    }
                };
                Room.prototype.ngOnDestroy = function () {
                    this.filterSubscription.unsubscribe();
                    this.reservationSubscriber.unsubscribe();
                };
                Room.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.reservationFilterObserver.subscription) {
                        this.reservationFilterObserver.connect();
                    }
                    if (!this.reservationObserver.subscription) {
                        this.reservationObserver.connect();
                    }
                    this.filterSubscription = this.reservationFilterObserver
                        .subscribe(function (res) {
                        _this.filter = _this.ReservationService.filter;
                        _this.checkAvailability();
                    });
                    this.reservations = this.ReservationService.reservations;
                    this.filter = this.ReservationService.filter;
                    this.checkAvailability();
                    this.reservationSubscriber = this.reservationObserver
                        .subscribe(function (res) {
                        if (res === undefined) {
                            _this.reservationModalOpened = false;
                        }
                        if (res && res.type) {
                            _this.reservations = res.data;
                            _this.checkAvailability();
                        }
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Room.prototype, "data", void 0);
                Room = __decorate([
                    core_1.Component({
                        selector: 'room',
                        directives: [resizable_1.Resizable, draggable_1.Draggable, edit_element_1.EditElement, place_element_1.PlaceElement,
                            reservation_modal_1.ReservationModal, edit_element_1.EditElement, popover_1.Popover],
                        inputs: ['data', 'designMode'],
                        styleUrls: ['styles/floors/room.css', 'styles/common/controls.css'],
                        template: "\n    <div class=\"wrapper control\" resizable-element draggable-element\n    [containment]=\"'#floor' + data.floorID\" [attr.element-id]=\"data.elementID\" [attr.data-id]=\"data.floorID\"\n      [class.reserved]=\"!designMode && !isActive\" [class.not-match]=\"!designMode && !isMatch\"\n      [class.reservation-modal-opened]=\"reservationModalOpened\">\n      <reservation-modal\n        *ngIf=\"!designMode\"\n        [activeReservation]=\"activeReservation\"\n        [data]=\"data\"\n        place-element [place-type]=\"'modal'\"></reservation-modal>\n      <edit-element *ngIf=\"designMode\" place-element place-type=\"modal\" [data]=\"data\"></edit-element>\n      <popover [data]=\"data\" [reservations]=\"reservations\"\n        (edit-reservation)=\"handleEditReservation()\"\n        [activeReservation]=\"activeReservation\"></popover>\n      <div class=\"room\" (click)=\"handleClick()\">\n        <div><span>{{ data.elementName }}</span></div>\n        <div class=\"second-line\">\n          <div *ngIf=\"designMode\">\n            <a (click)=\"editElement()\"><i class=\"fa fa-pencil\"></i></a>\n            <a (click)=\"destroy()\"><i class=\"fa fa-trash\"></i></a>\n          </div>\n          <div *ngIf=\"!designMode && isActive && isMatch\">\n            <div class=\"features pull-left\">\n              <span><i class=\"fa fa-user\"></i> {{ data.capacity }}</span>\n              <span><i class=\"fa fa-television\" *ngIf=\"data.features && data.features.indexOf('tv') > -1\"></i></span>\n              <span><i class=\"fa fa-phone\" *ngIf=\"data.features && data.features.indexOf('phone') > -1\"></i></span>\n            </div>\n            <div class=\"book pull-right hidden-xs\">\n              <i class=\"fa fa-plus-square\"></i>\n            </div>\n            <i class=\"visible-xs fa fa-plus-square\"></i>\n          </div>\n          <div *ngIf=\"!designMode && !isActive\" class=\"reserved\">\n            <i class=\"visible-xs fa fa-ban\"></i>\n            <span>Reserved</span>\n          </div>\n          <div *ngIf=\"!designMode && isActive && !isMatch\" class=\"reserved\">\n            <i class=\"visible-xs fa fa-filter\"></i>\n            <span>Not a match</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, ReservationService_1.ReservationService, DesignService_1.DesignService, FloorElementsService_1.FloorElementsService, core_1.ChangeDetectorRef])
                ], Room);
                return Room;
            })();
            exports_1("Room", Room);
        }
    }
});

//# sourceMappingURL=room.js.map
