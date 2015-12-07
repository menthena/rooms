import {Component, Input} from 'angular2/angular2';

@Component({
  selector: 'loading-indicator',
  inputs: ['mini'],
  template: `
  <div class="spinner" [class.mini]="mini">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
  `,
  styleUrls: ['styles/common/loading-indicator.css']
})

export class LoadingIndicator {
  @Input() mini: boolean;
}
