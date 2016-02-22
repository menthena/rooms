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
var rxjs_1 = require('rxjs');
var app_config_1 = require('../config/app.config');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        if (rxjs_1.Observable) {
            this.userObservable = rxjs_1.Observable
                .create(function (observer) {
                return function () { return console.log('disposed'); };
            }).publish();
        }
        // TODO: Use official Angular2 CORS support when merged (https://github.com/angular/angular/issues/4231).
        if (this.http._backend && this.http._backend._browserXHR) {
            var _build = this.http._backend._browserXHR.build;
            this.http._backend._browserXHR.build = function () {
                var _xhr = _build();
                _xhr.withCredentials = true;
                return _xhr;
            };
        }
    }
    UserService.prototype.login = function (email, password) {
        var _this = this;
        var observable = this.http.post(app_config_1.ENV_URL + '/oauth/login', JSON.stringify({
            email: email,
            password: password
        }), {
            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
        });
        var subscription = observable
            .subscribe(function (res) {
            _this.isLogged = true;
            _this.userData = res.json();
            _this.userObservable
                .subscription
                .next();
            return res;
        }, function (err) {
            return err;
        });
        return subscription;
    };
    UserService.prototype.recoverPassword = function (email) {
        var observable = this.http.post(app_config_1.ENV_URL + '/oauth/forgot-password', JSON.stringify({
            email: email
        }), {
            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
        });
        return observable;
    };
    UserService.prototype.resetPassword = function (email, password, token) {
        var observable = this.http.post('/oauth/reset-password', JSON.stringify({
            email: email,
            password: password,
            token: token
        }), {
            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
        });
        return observable;
    };
    UserService.prototype.changePassword = function (oldPassword, newPassword) {
        var observable = this.http.patch(app_config_1.ENV_URL + '/oauth/change-password', JSON.stringify({
            oldPassword: oldPassword,
            password: newPassword
        }), {
            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
        });
        return observable;
    };
    UserService.prototype.getUserObservable = function () {
        return this.userObservable;
    };
    UserService.prototype.getUser = function () {
        var _this = this;
        var observable = this.http.get(app_config_1.ENV_URL + '/oauth/tokeninfo');
        var subscription = observable
            .subscribe(function (res) {
            _this.userData = res.json();
            _this.isLogged = true;
            _this.userObservable
                .subscription
                .next();
            return res;
        }, function (err) {
            // this.isLogged = false;
            return err;
        });
        return subscription;
    };
    UserService.prototype.register = function (userObject) {
        var observable = this.http.post(app_config_1.ENV_URL + '/api/user', JSON.stringify(userObject), {
            headers: new http_1.Headers({ 'Content-Type': 'application/json' })
        });
        return observable;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
})();
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map
