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
var http_1 = require('angular2/http');
var app_config_1 = require('../config/app.config');
var FloorService = (function () {
    function FloorService(http) {
        this.http = http;
        this.floors = new Array();
        // TODO: Use official Angular2 CORS support when merged (https://github.com/angular/angular/issues/4231).
        if (this.http._backend._browserXHR) {
            var _build = this.http._backend._browserXHR.build;
            this.http._backend._browserXHR.build = function () {
                var _xhr = _build();
                _xhr.withCredentials = true;
                return _xhr;
            };
        }
    }
    FloorService.prototype.deleteFloor = function (floorID) {
        return this.http.delete(app_config_1.ENV_URL + '/api/floor/' + floorID);
    };
    FloorService.prototype.addFloor = function (floorName) {
        return this.http.post(app_config_1.ENV_URL + '/api/floor', JSON.stringify({
            floorName: floorName
        }), {
            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
        });
    };
    FloorService.prototype.updateFloor = function (floorID, floorData) {
        return this.http.patch(app_config_1.ENV_URL + '/api/floor/' + floorID, JSON.stringify(floorData), {
            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
        });
    };
    FloorService.prototype.changeOrder = function (floorID, direction) {
        return this.http.put(app_config_1.ENV_URL + '/api/floor/change-order', JSON.stringify({
            floorID: floorID,
            direction: direction
        }), {
            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
        });
    };
    FloorService.prototype.fetchAll = function () {
        return this.http.get(app_config_1.ENV_URL + '/api/floor', {
            headers: new http_1.Headers({
                'Authorization': 'Basic ' + window.btoa('asd@asd.com:asdasd')
            })
        });
    };
    FloorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], FloorService);
    return FloorService;
    var _a;
})();
exports.FloorService = FloorService;
//# sourceMappingURL=FloorService.js.map
