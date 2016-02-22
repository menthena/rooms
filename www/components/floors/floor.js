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
var common_1 = require('angular2/common');
var FloorService_1 = require('../../services/FloorService');
var FloorElementsService_1 = require('../../services/FloorElementsService');
var room_1 = require('./room');
var constants_1 = require('../../config/constants');
var AppService_1 = require('../../services/AppService');
var FloorService_2 = require('../../services/FloorService');
var placeholder_1 = require('./placeholder');
var line_1 = require('./line');
var icon_1 = require('./icon');
var loading_indicator_1 = require('../../directives/loading-indicator');
var place_element_1 = require('../../directives/place-element');
var droppable_1 = require('../../directives/droppable');
var DesignService_1 = require('../../services/DesignService');
var ReservationService_1 = require('../../services/ReservationService');
var Floor = (function () {
    function Floor(floorElementsService, changeRef, DesignService, ReservationService, fb, floorService, AppService) {
        this.floorElementsService = floorElementsService;
        this.changeRef = changeRef;
        this.DesignService = DesignService;
        this.ReservationService = ReservationService;
        this.fb = fb;
        this.floorService = floorService;
        this.AppService = AppService;
        this.floorElements = [];
        this.floorElementsObservable = this.floorElementsService.getObservable();
        this.floorElementsObservable.connect();
        this.designMode = DesignService.designModeState;
        this.isLoading = false;
        this.isIonic = this.AppService.isIonic;
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
    // changeOrder(direction) {
    //   this.isLoading = true;
    //   this.updateFloor
    //     .next({
    //       floorID: this.floor.floorID,
    //       type: 'order',
    //       direction: direction
    //     });
    // }
    //
    // showDeleteFloorConfirmation() {
    //   this.showConfirmDeletion = true;
    //   if (this.overlayObservable.subscription) {
    //     this.overlayObservable.subscription
    //       .next({
    //         type: 'show',
    //         message: `You are about to delete a floor. Are you sure you want to do that?
    //           Be aware that you will also delete the reservations.`,
    //         panelType: 'confirmation',
    //         id: this.floor.floorID
    //       });
    //   }
    // }
    // deleteFloor() {
    //   this.isLoading = true;
    //   this.floorService.deleteFloor(this.floor.floorID)
    //     .delay(200)
    //     .subscribe(
    //       (res: any) => {
    //         if (res.status === 204) {
    //           console.log(this.componentRef);
    //           // this.componentRef.dispose();
    //         }
    //       }
    //     );
    // }
    Floor.prototype.fetch = function (floorID) {
        var _this = this;
        this.isLoading = true;
        this.floorElementsService.fetchElementsByFloorID(floorID)
            .delay(200)
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
        __metadata('design:type', (typeof (_a = typeof FloorService_1.IFloor !== 'undefined' && FloorService_1.IFloor) === 'function' && _a) || Object)
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
            template: "\n  <div [ngClass]=\"{'design-mode': designMode}\">\n    <ul class=\"list-inline\">\n      <li *ngIf=\"!isIonic\">\n        <h1 *ngIf=\"!editMode\">\n          {{ floor.floorName }}\n          <span *ngIf=\"designMode\">\n            <a (click)=\"switchEditMode()\" class=\"btn\"><i class=\"fa fa-pencil\"></i></a>\n          </span>\n        </h1>\n        <div *ngIf=\"editMode\" class=\"header\">\n          <form [ngFormModel]=\"editFloorNameForm\">\n            <input type=\"text\" name=\"floorName\" id=\"floorName\" ngControl=\"floorName\">\n            <button (click)=\"submitEditFloorNameForm($event)\" type=\"submit\" class=\"btn\"><i class=\"fa fa-check\"></i></button>\n            <button (click)=\"cancelEditFloorNameForm($event)\" class=\"btn\"><i class=\"fa fa-times\"></i></button>\n          </form>\n        </div>\n      </li>\n      <li *ngIf=\"!isIonic\">\n        <loading-indicator *ngIf=\"isLoading\" mini=\"true\"></loading-indicator>\n      </li>\n    </ul>\n    <div [attr.id]=\"'floor' + floor.floorID\" class=\"floor\" droppable-element\n      [attr.data-id]=\"floor.floorID\" [ngClass]=\"{loading: isLoading}\">\n      <div class=\"inner\">\n        <div *ngFor=\"#element of floorElements\" [ngSwitch]=\"element.elementType\">\n          <room *ngSwitchWhen=\"'room'\" [data]=\"element\" place-element></room>\n          <line *ngSwitchWhen=\"'line'\" [data]=\"element\" place-element></line>\n          <placeholder *ngSwitchWhen=\"'placeholder'\" [data]=\"element\" place-element></placeholder>\n          <icon *ngSwitchDefault [data]=\"element\" place-element></icon>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof FloorElementsService_1.FloorElementsService !== 'undefined' && FloorElementsService_1.FloorElementsService) === 'function' && _b) || Object, (typeof (_c = typeof core_1.ChangeDetectorRef !== 'undefined' && core_1.ChangeDetectorRef) === 'function' && _c) || Object, (typeof (_d = typeof DesignService_1.DesignService !== 'undefined' && DesignService_1.DesignService) === 'function' && _d) || Object, (typeof (_e = typeof ReservationService_1.ReservationService !== 'undefined' && ReservationService_1.ReservationService) === 'function' && _e) || Object, (typeof (_f = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _f) || Object, (typeof (_g = typeof FloorService_2.FloorService !== 'undefined' && FloorService_2.FloorService) === 'function' && _g) || Object, (typeof (_h = typeof AppService_1.AppService !== 'undefined' && AppService_1.AppService) === 'function' && _h) || Object])
    ], Floor);
    return Floor;
    var _a, _b, _c, _d, _e, _f, _g, _h;
})();
exports.Floor = Floor;
//# sourceMappingURL=floor.js.map
