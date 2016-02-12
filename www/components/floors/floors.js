System.register(['angular2/core', '../../services/FloorService', '../../services/AppService', '../../services/DesignService', './floor', '../../directives/loading-indicator'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, FloorService_1, AppService_1, DesignService_1, floor_1, loading_indicator_1;
    var Floors;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (FloorService_1_1) {
                FloorService_1 = FloorService_1_1;
            },
            function (AppService_1_1) {
                AppService_1 = AppService_1_1;
            },
            function (DesignService_1_1) {
                DesignService_1 = DesignService_1_1;
            },
            function (floor_1_1) {
                floor_1 = floor_1_1;
            },
            function (loading_indicator_1_1) {
                loading_indicator_1 = loading_indicator_1_1;
            }],
        execute: function() {
            Floors = (function () {
                function Floors(floorService, DesignService, AppService) {
                    this.floorService = floorService;
                    this.DesignService = DesignService;
                    this.AppService = AppService;
                    this.overlayObservable = this.AppService.overlayObservable;
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
                    });
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
                        directives: [floor_1.Floor, loading_indicator_1.LoadingIndicator],
                        template: "\n    <a *ngIf=\"designMode && floors && floors.length > 0\" (click)=\"addFloor()\"\n      class=\"add-floor button\"><i class=\"fa fa-plus\"></i> Add floor</a>\n    <loading-indicator *ngIf=\"isLoading\"></loading-indicator>\n    <div *ngIf=\"floors\">\n      <div class=\"no-floor text-center\" *ngIf=\"!isLoading && floors.length === 0\">\n        <div>\n          No floors, why don't you add one?\n        </div>\n        <a *ngIf=\"designMode\" (click)=\"addFloor()\"><i class=\"fa fa-plus\"></i> Add floor</a>\n      </div>\n\n      <div *ngFor=\"#floor of floors\">\n        <div *ngIf=\"designMode\" class=\"pull-right\">\n          <a (click)=\"changeOrder(floor.floorID, 'up')\" *ngIf=\"floor.order > 0\" class=\"button\"><i class=\"fa fa-arrow-up\"></i></a>\n          <a (click)=\"changeOrder(floor.floorID, 'down')\" *ngIf=\"floor.order < floors.length - 1\"\n            class=\"button\"><i class=\"fa fa-arrow-down\"></i></a>\n          <a (click)=\"showDeleteFloorConfirmation(floor.floorID)\" class=\"button\"><i class=\"fa fa-trash\"></i></a>\n        </div>\n        <floor [floor]=\"floor\"></floor>\n      </div>\n    </div>\n  ",
                        styleUrls: ['styles/floors/floors.css']
                    }), 
                    __metadata('design:paramtypes', [FloorService_1.FloorService, DesignService_1.DesignService, AppService_1.AppService])
                ], Floors);
                return Floors;
            })();
            exports_1("Floors", Floors);
        }
    }
});

//# sourceMappingURL=floors.js.map
