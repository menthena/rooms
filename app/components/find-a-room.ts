import {Component} from 'angular2/angular2';
import {Filter} from './filter';

@Component({
  directives: [Filter],
  selector: 'find-a-room',
  template: `
    <filter></filter>
    <floors></floors>
  `,
  styleUrls: ['styles/find-a-room.css']
})

export class FindARoom {}
