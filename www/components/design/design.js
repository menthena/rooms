System.register(['angular2/core', 'angular2/router', './design-tools', '../floors/floors', '../../services/DesignService', '../../services/UserService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, design_tools_1, floors_1, DesignService_1, UserService_1;
    var Design;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (design_tools_1_1) {
                design_tools_1 = design_tools_1_1;
            },
            function (floors_1_1) {
                floors_1 = floors_1_1;
            },
            function (DesignService_1_1) {
                DesignService_1 = DesignService_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            }],
        execute: function() {
            Design = (function () {
                function Design(DesignService, UserService, router) {
                    this.DesignService = DesignService;
                    this.UserService = UserService;
                    this.router = router;
                    this.DesignService.designModeState = true;
                    if (!this.UserService.isLogged) {
                        this.router.navigate(['Login']);
                    }
                }
                Design = __decorate([
                    core_1.Component({
                        directives: [design_tools_1.DesignTools, floors_1.Floors],
                        encapsulation: core_1.ViewEncapsulation.None,
                        selector: 'design',
                        template: "\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <design-tools></design-tools>\n        </div>\n        <div class=\"col-sm-9\">\n          <floors></floors>\n        </div>\n      </div>\n    </div>\n  ",
                        styleUrls: ['styles/design/design.css']
                    }), 
                    __metadata('design:paramtypes', [DesignService_1.DesignService, UserService_1.UserService, router_1.Router])
                ], Design);
                return Design;
            })();
            exports_1("Design", Design);
        }
    }
});

//# sourceMappingURL=design.js.map
