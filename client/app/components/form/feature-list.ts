import {Component, Input} from '@angular/core';
import {FEATURES_DATA} from '../../config/constants';
import {Button} from '../form/button';

@Component({
  selector: 'feature-list',
  directives: [Button],
  inputs: ['formModel'],
  properties: ['controlName'],
  template: `
  <ul class="list-unstyled features list-inline">
    <li *ngFor="let feature of features">
      <input [controlName]="controlName" [formModel]="formModel"
        type="checkbox" [attr.id]="feature.value" button [attr.value]="feature.value"
        >

      <label [attr.for]="feature.value"><i></i><span>{{ feature.text }}</span></label>
    </li>
  </ul>
  `
})
// TODO: ADD
// [checked]="formModel.value[controlName].indexOf(feature.value) > -1"
export class FeatureList {
  @Input() controlName: string;
  @Input() formModel: any;
  features: Array<Object>;

  constructor() {
    this.features = FEATURES_DATA;
  }
};
