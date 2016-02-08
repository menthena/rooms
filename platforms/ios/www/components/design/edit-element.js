System.register(['angular2/core', 'angular2/common', '../../services/DesignService', '../../services/FloorElementsService', '../form/slider', '../form/feature-list'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, DesignService_1, FloorElementsService_1, slider_1, feature_list_1;
    var EditElement;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (DesignService_1_1) {
                DesignService_1 = DesignService_1_1;
            },
            function (FloorElementsService_1_1) {
                FloorElementsService_1 = FloorElementsService_1_1;
            },
            function (slider_1_1) {
                slider_1 = slider_1_1;
            },
            function (feature_list_1_1) {
                feature_list_1 = feature_list_1_1;
            }],
        execute: function() {
            EditElement = (function () {
                function EditElement(elementRef, DesignService, fb, FloorElementsService) {
                    this.elementRef = elementRef;
                    this.fb = fb;
                    this.FloorElementsService = FloorElementsService;
                    this.designObservable = DesignService.getObservable();
                    this.FloorElementsService = FloorElementsService;
                    this.floorElementsObservable = this.FloorElementsService.getObservable();
                }
                EditElement.prototype.dismissEditing = function () {
                    var _this = this;
                    this.isActive = false;
                    setTimeout(function () {
                        _this.editID = null;
                    }, 200);
                };
                EditElement.prototype.setIcon = function (icon) {
                    this.data.elementIcon = icon;
                };
                EditElement.prototype.submitEditForm = function () {
                    var _this = this;
                    if (!this.isSubmitting) {
                        this.isSubmitting = true;
                        var data = this.editForm.value;
                        data.floorID = this.data.floorID;
                        this.isActive = false;
                        this.FloorElementsService.editElement(this.data.elementID, data);
                        this.floorElementsObservable
                            .delay(100)
                            .subscribe(function () {
                            _this.editID = null;
                        }, function (err) {
                            console.log(err);
                        });
                    }
                };
                EditElement.prototype.ngOnInit = function () {
                    var _this = this;
                    this.editForm = this.fb.group({
                        elementName: [this.data.elementName],
                        capacity: [this.data.capacity],
                        features: [this.data.features]
                    });
                    this.designObservable
                        .delay(50)
                        .subscribe(function (res) {
                        if (res && res.type === 'edit') {
                            _this.isActive = true;
                        }
                    });
                    this.designObservable
                        .subscribe(function (res) {
                        if (res && res.type === 'edit') {
                            _this.isActive = false;
                            _this.editID = res.data;
                        }
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], EditElement.prototype, "data", void 0);
                EditElement = __decorate([
                    core_1.Component({
                        selector: 'edit-element',
                        directives: [slider_1.Slider, feature_list_1.FeatureList],
                        encapsulation: core_1.ViewEncapsulation.None,
                        styleUrls: ['styles/edit-element.css'],
                        inputs: ['data'],
                        template: "\n    <div class=\"wrapper\">\n      <div class=\"edit-element\" *ngIf=\"editID === data.elementID\"\n      [ngClass]=\"{'active': isActive, 'submitting': isSubmitting, 'element-placeholder': data.elementType === 'placeholder'}\">\n        <form [ngFormModel]=\"editForm\" (ngSubmit)=\"submitEditForm($event)\">\n          <div class=\"heading\">\n            Edit\n          </div>\n\n          <div class=\"form\">\n            <div class=\"input-group\">\n              <label for=\"elementName\">Name</label>\n              <input type=\"text\" name=\"elementName\" ngControl=\"elementName\" id=\"elementName\" placeholder=\"Element name...\" />\n            </div>\n\n            <div *ngIf=\"data.elementType === 'placeholder'\">\n              <div class=\"input-group\">\n                <label>Icon</label>\n                <div class=\"icons\">\n                  <ul class=\"list-unstyled list-inline\">\n                    <li>\n                      <a (click)=\"setIcon(null)\" [class.selected]=\"!data.elementIcon\">None</a>\n                    </li>\n                    <li>\n                      <a (click)=\"setIcon('printer')\" [class.selected]=\"data.elementIcon === 'printer'\">\n                        <i class=\"fa fa-print\"></i> Printer\n                      </a>\n                    </li>\n                    <li>\n                      <a (click)=\"setIcon('information')\" [class.selected]=\"data.elementIcon === 'information'\">\n                        <i class=\"fa fa-info\"></i> Information\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"data.elementType === 'room'\">\n              <div class=\"input-group\">\n                <label>Min. capacity: <span class=\"slider-content\">({{ editForm.value.capacity }})</span></label>\n                <slider controlName=\"capacity\" [formModel]=\"editForm\"></slider>\n              </div>\n              <div class=\"input-group\">\n                <label>Features</label>\n                <feature-list controlName=\"features\" [formModel]=\"editForm\"></feature-list>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"buttons\">\n            <a (click)=\"dismissEditing()\"><i class=\"fa fa-times\"></i></a>\n            <a (click)=\"submitEditForm()\" class=\"submit\"><i class=\"fa fa-check\"></i></a>\n          </div>\n        </form>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, DesignService_1.DesignService, common_1.FormBuilder, FloorElementsService_1.FloorElementsService])
                ], EditElement);
                return EditElement;
            })();
            exports_1("EditElement", EditElement);
        }
    }
});

//# sourceMappingURL=edit-element.js.map
