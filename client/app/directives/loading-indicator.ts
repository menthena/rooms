import {Component, Input} from '@angular/core';

@Component({
  selector: 'loading-indicator',
  template: `
  <div class="spinner" [class.mini]="mini" [class.white]="white">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
  `,
  styleUrls: ['styles/common/loading-indicator.css']
})

export class LoadingIndicator {
  @Input() mini: boolean;
  @Input() white: boolean;
}
