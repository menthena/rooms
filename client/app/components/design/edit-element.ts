import {Component, NgIf, NgClass, Input, OnInit, Observable,
  ElementRef, Validators, FormBuilder, FORM_DIRECTIVES,
  ViewEncapsulation} from 'angular2/angular2';
import {IFloorElement} from '../../services/FloorElementsService';
import {DesignService} from '../../services/DesignService';
import {FloorElementsService} from '../../services/FloorElementsService';
import {Slider} from '../form/slider';
import {FeatureList} from '../form/feature-list';

declare var jQuery: any;

@Component({
  selector: 'edit-element',
  directives: [NgIf, NgClass, Slider, FeatureList, FORM_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['styles/edit-element.css'],
  inputs: ['data'],
  template: `
    <div class="wrapper">
      <div class="edit-element" *ng-if="editID === data.elementID" [ng-class]="{'active': isActive, 'submitting': isSubmitting}">
        <form [ng-form-model]="editForm" (submit)="submitEditForm($event)">
          <div class="heading">
            Edit
          </div>

          <div class="form">
            <div class="input-group">
              <label for="elementName">Name</label>
              <input type="text" name="elementName" ng-control="elementName" id="elementName" placeholder="Element name..." />
            </div>
            <div class="input-group">
              <label>Min capacity: <span class="slider-content">({{ editForm.value.capacity }})</span></label>
              <slider control-name="capacity" [(form-model)]="editForm"></slider>
            </div>
            <div class="input-group">
              <label>Features</label>
              <feature-list control-name="features" [(form-model)]="editForm"></feature-list>
            </div>
          </div>

          <div class="buttons">
            <a (click)="dismissEditing()"><i class="fa fa-times"></i></a>
            <a (click)="submitEditForm()"><i class="fa fa-check"></i></a>
          </div>
        </form>
      </div>
    </div>
  `
})

export class EditElement {
  @Input() data: IFloorElement;
  designObservable;
  isSubmitting: boolean;
  isActive: boolean;
  editID: boolean;
  editForm: any;
  floorElementsObservable;

  constructor(private elementRef: ElementRef, DesignService: DesignService,
      private fb: FormBuilder, private FloorElementsService: FloorElementsService) {
    this.designObservable = DesignService.getObservable();
    this.FloorElementsService = FloorElementsService;
    this.floorElementsObservable = this.FloorElementsService.getObservable();
  }

  dismissEditing() {
    this.isActive = false;
    setTimeout(() => {
      this.editID = null;
    }, 200);
  }

  submitEditForm() {
    if (!this.isSubmitting) {
      this.isSubmitting = true;
      let data: any = this.editForm.value;
      data.floorID = this.data.floorID;
      this.isActive = false;
      this.FloorElementsService.editElement(this.data.elementID, data);
      this.floorElementsObservable
        .delay(100)
        .subscribe(() => {
          this.editID = null;
        }, (err) => {
          console.log(err);
        });
    }
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      elementName: [this.data.elementName],
      capacity: [this.data.capacity],
      features: [this.data.features]
    });
    this.designObservable
      .delay(50)
      .subscribe((res) => {
        if (res && res.type === 'edit') {
          this.isActive = true;
        }
      });
    this.designObservable
      .subscribe(
        res => {
          if (res && res.type === 'edit') {
            this.isActive = false;
            this.editID = res.data;
          }
        }
      );
  }
}
