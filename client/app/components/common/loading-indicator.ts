import {Component} from 'angular2/angular2';

@Component({
  selector: 'loading-indicator',
  template: `
  <div class="spinner">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
  `,
  styleUrls: ['styles/common/loading-indicator.css']
})

export class LoadingIndicator {}
