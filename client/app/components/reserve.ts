import {Component, OnInit} from 'angular2/angular2';
import {Filter} from './filter';
import {Floors} from './floors/floors';
import {DesignService} from '../services/DesignService';

@Component({
  directives: [Filter, Floors],
  selector: 'reserve',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <element-filter></element-filter>
        </div>
        <div class="col-sm-9">
          <floors></floors>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['styles/reserve.css']
})

export class Reserve {
  constructor(private DesignService: DesignService) {
    this.DesignService.designModeState = false;
  }
}
