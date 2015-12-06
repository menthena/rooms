import {Component} from 'angular2/angular2';
import {Filter} from './filter';
import {Floors} from './floors/floors';

@Component({
  directives: [Filter, Floors],
  selector: 'find-a-room',
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
  styleUrls: ['styles/find-a-room.css']
})

export class FindARoom {}
