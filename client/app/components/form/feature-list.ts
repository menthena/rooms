import {Component, Input, FORM_DIRECTIVES} from 'angular2/angular2';
import {FEATURES_DATA} from '../../constants';
import {Button} from '../form/button';

@Component({
  selector: 'feature-list',
  directives: [FORM_DIRECTIVES, Button],
  inputs: ['formModel'],
  properties: ['controlName'],
  template: `
  <ul class="list-unstyled features list-inline">
    <li *ng-for="#feature of features">
      <input [control-name]="controlName" [(form-model)]="formModel"
        type="checkbox" [attr.id]="feature.value" button [attr.value]="feature.value"
        [checked]="formModel.value[controlName].indexOf(feature.value) > -1">
      <label [attr.for]="feature.value"><i></i><span>{{ feature.text }}</span></label>
    </li>
  </ul>
  `
})

export class FeatureList {
  @Input() controlName: string;
  @Input() formModel: any;
  features: Array<Object>;

  constructor() {
    this.features = FEATURES_DATA;
  }
};
