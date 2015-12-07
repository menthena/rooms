import {Component, OnInit, ViewEncapsulation} from 'angular2/angular2';
import {DesignTools} from './design-tools';
import {Floors} from '../floors/floors';
import {DesignService} from '../../services/DesignService';

@Component({
  directives: [DesignTools, Floors],
  encapsulation: ViewEncapsulation.None,
  selector: 'design',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <design-tools></design-tools>
        </div>
        <div class="col-sm-9">
          <floors></floors>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['styles/design/design.css']
})

export class Design {
  constructor(private DesignService: DesignService) {
    this.DesignService.designModeState = true;
  }
}
