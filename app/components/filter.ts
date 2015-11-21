import {Component} from 'angular2/angular2';

@Component({
  selector: 'filter',
  template: `
  <h1>Find a room</h1>

  <ul>
    <li>
      <label for="date">Date</label>
      <input type="text" id="date">
    </li>
    <li>
      <label for="time">Time</label>
      <input type="text" id="time">
    </li>
    <li>
      <label for="duration">Duration</label>
      <input type="text" id="duration">
    </li>
    <li>
      <label for="room-size">Room size</label>
    </li>
    <li>
      <label for="duration">Filter</label>
      <input type="checkbox" id="tv"><label for="tv">TV</label>
      <input type="checkbox" id="phone"><label for="phone">Phone</label>
    </li>
  </ul>
  `,
  styleUrls: ['styles/filter.css']
})

export class Filter {}
