import {Component, OnInit, ElementRef, ViewEncapsulation} from 'angular2/angular2';
import {DatePicker} from './form/date-picker';
import {SelectMenu} from './form/select-menu';
import {Slider} from './form/slider';
import {Button} from './form/button';

declare var jQuery:any;

@Component({
  directives: [DatePicker, SelectMenu, Slider, Button],
  selector: 'element-filter',
  template: `
  <div class="filter">
    <h1>Reserve a room</h1>

    <ul class="list-unstyled row">
      <li class="col-sm-12 col-xs-6 with-icon">
        <div class="input-group">
          <date-picker></date-picker>
        </div>
      </li>
      <li class="col-sm-12 col-xs-6 with-icon time">
        <div class="input-group">
          <label for="time">Time</label>
          <i class="fa fa-clock-o"></i>
          <select name="time" id="time" select-menu>
            <option>12:30</option>
            <option>12:30</option>
            <option>12:30</option>
            <option>12:30</option>
            <option>12:30</option>
            <option>12:30</option>
            <option>12:30</option>
            <option>12:30</option>
            <option>12:30</option>
            <option>12:30</option>
            <option>12:30</option>
            <option>12:30</option>
            <option>12:30</option>
            <option>12:30</option>
            <option>12:30</option>
            <option>12:30</option>
          </select>
        </div>
      </li>
      <li class="col-sm-12 col-xs-6">
        <div class="input-group">
          <label for="duration">Duration</label>
          <select name="duration" id="duration" select-menu>
            <option></option>
          </select>
        </div>
      </li>
      <li class="col-sm-12 col-xs-6">
        <div class="input-group">
          <label for="room-size">Room size</label>
          <slider></slider>
        </div>
      </li>
      <li class="col-sm-12 col-xs-6">
        <div class="input-group">
          <label for="duration">Filter</label>
          <ul class="list-unstyled features list-inline">
            <li><input type="checkbox" id="tv" button><label for="tv"><i></i><span>TV</span></label></li>
            <li><input type="checkbox" id="phone" button><label for="phone"><i></i><span>Phone</span></label></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['styles/filter.css']
})

export class Filter {

}
