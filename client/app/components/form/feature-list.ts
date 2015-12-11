import {Component, Input, FORM_DIRECTIVES} from 'angular2/angular2';
import {Button} from '../form/button';

@Component({
  selector: 'feature-list',
  directives: [FORM_DIRECTIVES, Button],
  inputs: ['formModel'],
  properties: ['controlName'],
  template: `
  <ul class="list-unstyled features list-inline">
    <li><input [control-name]="controlName" [(form-model)]="formModel"
      type="checkbox" id="tv" button value="tv"><label for="tv"><i></i><span>TV</span></label></li>
    <li><input [control-name]="controlName" [(form-model)]="formModel"
      type="checkbox" id="phone" button value="phone"><label for="phone"><i></i><span>Phone</span></label></li>
  </ul>
  `
})

export class FeatureList {
  @Input() controlName: string;
  @Input() formModel: any;
};
