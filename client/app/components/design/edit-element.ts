import {Component, Input, OnInit, ElementRef,
  ViewEncapsulation} from 'angular2/core';
import {Observable} from 'rxjs';
import {Validators, FormBuilder} from 'angular2/common';
import {IFloorElement} from '../../services/FloorElementsService';
import {DesignService} from '../../services/DesignService';
import {FloorElementsService} from '../../services/FloorElementsService';
import {Slider} from '../form/slider';
import {FeatureList} from '../form/feature-list';

declare var jQuery: any;

@Component({
  selector: 'edit-element',
  directives: [Slider, FeatureList],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['styles/edit-element.css'],
  inputs: ['data'],
  template: `
    <div class="wrapper">
      <div class="edit-element" *ngIf="editID === data.elementID"
      [ngClass]="{'active': isActive, 'submitting': isSubmitting, 'element-placeholder': data.elementType === 'placeholder'}">
        <form [ngFormModel]="editForm" (ngSubmit)="submitEditForm($event)">
          <div class="heading">
            Edit
          </div>

          <div class="form">
            <div class="input-group">
              <label for="elementName">Name</label>
              <input type="text" name="elementName" ngControl="elementName" id="elementName" placeholder="Element name..." />
            </div>

            <div *ngIf="data.elementType === 'placeholder'">
              <div class="input-group">
                <label>Icon</label>
                <div class="icons">
                  <ul class="list-unstyled list-inline">
                    <li>
                      <a (click)="setIcon(null)" [class.selected]="!data.elementIcon">None</a>
                    </li>
                    <li>
                      <a (click)="setIcon('printer')" [class.selected]="data.elementIcon === 'printer'">
                        <i class="fa fa-print"></i> Printer
                      </a>
                    </li>
                    <li>
                      <a (click)="setIcon('information')" [class.selected]="data.elementIcon === 'information'">
                        <i class="fa fa-info"></i> Information
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div *ngIf="data.elementType === 'room'">
              <div class="input-group">
                <label>Min. capacity: <span class="slider-content">({{ editForm.value.capacity }})</span></label>
                <slider controlName="capacity" [formModel]="editForm"></slider>
              </div>
              <div class="input-group">
                <label>Features</label>
                <feature-list controlName="features" [formModel]="editForm"></feature-list>
              </div>
            </div>
          </div>

          <div class="buttons">
            <a (click)="dismissEditing()"><i class="fa fa-times"></i></a>
            <a (click)="submitEditForm()" class="submit"><i class="fa fa-check"></i></a>
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

  setIcon(icon: string) {
    this.data.elementIcon = icon;
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
