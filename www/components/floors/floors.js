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
var FloorService_1 = require('../../services/FloorService');
var AppService_1 = require('../../services/AppService');
var DesignService_1 = require('../../services/DesignService');
var floor_1 = require('./floor');
var loading_indicator_1 = require('../../directives/loading-indicator');
var ionic_1 = require('ionic-framework/ionic');
var Floors = (function () {
    function Floors(floorService, DesignService, AppService) {
        this.floorService = floorService;
        this.DesignService = DesignService;
        this.AppService = AppService;
        this.overlayObservable = this.AppService.overlayObservable;
        this.isIonic = this.AppService.isIonic;
    }
    Floors.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchAll();
        this.designMode = this.DesignService.designModeState;
        this.overlayObservable
            .subscription
            .subscribe(function (res) {
            if (res.type === 'response') {
                if (res.data === true) {
                    _this.deleteFloor(res.id);
                }
            }
        });
    };
    Floors.prototype.addFloor = function () {
        var _this = this;
        this.isLoading = true;
        this.floorService.addFloor('Untitled floor')
            .delay(500)
            .subscribe(function (res) {
            _this.isLoading = false;
            var floors = res.json().data;
            floors = _.sortBy(floors, 'order');
            _this.floors = floors;
        });
    };
    Floors.prototype.fetchAll = function () {
        var _this = this;
        this.isLoading = true;
        this.floorService.fetchAll()
            .subscribe(function (res) {
            _this.isLoading = false;
            var floors = res.json().data;
            floors = _.sortBy(floors, 'order');
            _this.floors = floors;
            if (_this.isIonic && _this.floors.length > 0) {
                _this.selectedFloor = _this.floors[0].floorID;
            }
        });
    };
    Floors.prototype.changeSelectedFloor = function (floorID) {
        this.selectedFloor = floorID;
        console.log(floorID);
    };
    Floors.prototype.showDeleteFloorConfirmation = function (id) {
        this.showConfirmDeletion = true;
        if (this.overlayObservable.subscription) {
            this.overlayObservable.subscription
                .next({
                type: 'show',
                message: "You are about to delete a floor. Are you sure you want to do that?\n            Be aware that you will also delete the reservations.",
                panelType: 'confirmation',
                id: id
            });
        }
    };
    Floors.prototype.deleteFloor = function (floorID) {
        var _this = this;
        this.floorService.deleteFloor(floorID)
            .delay(200)
            .subscribe(function (res) {
            if (res.status === 204) {
                _.remove(_this.floors, { floorID: floorID });
            }
        });
    };
    Floors.prototype.changeOrder = function (id, direction) {
        var _this = this;
        this.floorService.changeOrder(id, direction)
            .delay(200)
            .subscribe(function (res) {
            var floors = res.json().data;
            floors = _.sortBy(floors, 'order');
            _this.floors = floors;
        });
    };
    Floors = __decorate([
        core_1.Component({
            selector: 'floors',
            directives: [floor_1.Floor, loading_indicator_1.LoadingIndicator, ionic_1.IONIC_DIRECTIVES],
            template: "\n    <div *ngIf=\"isIonic\">\n      <ion-segment>\n       <ion-segment-button *ngFor=\"#floor of floors\"\n        [ngClass]=\"{'segment-activated': floor.floorID === selectedFloor}\"\n        (click)=\"changeSelectedFloor(floor.floorID)\">\n         {{ floor.floorName }}\n       </ion-segment-button>\n      </ion-segment>\n    </div>\n    <a *ngIf=\"designMode && floors && floors.length > 0\" (click)=\"addFloor()\"\n      class=\"add-floor btn\"><i class=\"fa fa-plus\"></i> Add floor</a>\n    <loading-indicator *ngIf=\"isLoading\"></loading-indicator>\n    <div *ngIf=\"floors\">\n      <div class=\"no-floor text-center\" *ngIf=\"!isLoading && floors.length === 0\">\n        <div>\n          No floors, why don't you add one?\n        </div>\n        <a *ngIf=\"designMode\" (click)=\"addFloor()\"><i class=\"fa fa-plus\"></i> Add floor</a>\n      </div>\n\n      <div *ngFor=\"#floor of floors\">\n        <div *ngIf=\"!isIonic || (isIonic && floor && floor.floorID == selectedFloor)\">\n          <div *ngIf=\"designMode\" class=\"pull-right\">\n            <a (click)=\"changeOrder(floor.floorID, 'up')\" *ngIf=\"floor.order > 0\" class=\"btn\"><i class=\"fa fa-arrow-up\"></i></a>\n            <a (click)=\"changeOrder(floor.floorID, 'down')\" *ngIf=\"floor.order < floors.length - 1\"\n              class=\"btn\"><i class=\"fa fa-arrow-down\"></i></a>\n            <a (click)=\"showDeleteFloorConfirmation(floor.floorID)\" class=\"btn\"><i class=\"fa fa-trash\"></i></a>\n          </div>\n          <floor [floor]=\"floor\"></floor>\n        </div>\n      </div>\n    </div>\n  ",
            styleUrls: ['styles/floors/floors.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof FloorService_1.FloorService !== 'undefined' && FloorService_1.FloorService) === 'function' && _a) || Object, (typeof (_b = typeof DesignService_1.DesignService !== 'undefined' && DesignService_1.DesignService) === 'function' && _b) || Object, (typeof (_c = typeof AppService_1.AppService !== 'undefined' && AppService_1.AppService) === 'function' && _c) || Object])
    ], Floors);
    return Floors;
    var _a, _b, _c;
})();
exports.Floors = Floors;
//# sourceMappingURL=floors.js.map
