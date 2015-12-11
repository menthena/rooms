import {NgFor, Component, OnInit, ElementRef, ViewEncapsulation, Output,
  FormBuilder, ControlGroup, OnChanges, FORM_DIRECTIVES,
  EventEmitter} from 'angular2/angular2';
import {DatePicker} from '../form/date-picker';
import {DURATION_DATA, TIME_DATA} from '../../constants';
import {SelectMenu} from '../form/select-menu';
import {Slider} from '../form/slider';
import {FeatureList} from '../form/feature-list';
import {Button} from '../form/button';
import * as moment from 'moment';

declare var jQuery:any;

@Component({
  directives: [NgFor, DatePicker, SelectMenu, Slider, Button, FeatureList, FORM_DIRECTIVES],
  selector: 'element-filter',
  template: `
  <div class="filter">
    <form [ng-form-model]="filterForm" (submit)="submitFilterForm($event)">
      <h1>Reserve a room</h1>

      <ul class="list-unstyled row">
        <li class="col-sm-12 col-xs-6 with-icon">
          <div class="input-group">
            <input type="hidden" id="date" name="date" ng-control="date" value="">
            <date-picker control-name="date" [(form-model)]="filterForm" [data]="filter"></date-picker>
          </div>
        </li>
        <li class="col-sm-12 col-xs-6 with-icon time">
          <div class="input-group">
            <label for="time">Time</label>
            <i class="fa fa-clock-o"></i>
            <input type="hidden" id="time" name="time" ng-control="time" value="">
            <select control-name="time" [(form-model)]="filterForm" name="time" id="time" select-menu>
              <option *ng-for="#item of timeData" value="{{ item }}">{{ item }}</option>
            </select>
          </div>
        </li>
        <li class="col-sm-12 col-xs-6">
          <div class="input-group">
            <label for="duration">Duration</label>
            <input type="hidden" id="duration" name="duration" ng-control="duration" value="">
            <select control-name="duration" [(form-model)]="filterForm" name="duration" id="duration" select-menu >
              <option *ng-for="#item of durationData" value="{{ item.value }}">{{ item.text }}</option>
            </select>
          </div>
        </li>
        <li class="col-sm-12 col-xs-6">
          <div class="input-group">
            <label>Min capacity: <span class="slider-content">({{ filterForm.value.capacity }})</span></label>
            <input type="hidden" id="capacity" name="capacity" ng-control="capacity" value="">
            <slider range="true" min="1" max="60" control-name="capacity" [(form-model)]="filterForm"></slider>
          </div>
        </li>
        <li class="col-sm-12 col-xs-6">
          <div class="input-group">
            <label>Filter</label>
            <input type="hidden" id="features" name="features" ng-control="features" value="">
            <feature-list control-name="features" [(form-model)]="filterForm"></feature-list>
          </div>
        </li>
      </ul>
    </form>
  </div>
  `,
  styleUrls: ['styles/filter.css']
})

export class Filter {
  filterForm: ControlGroup;
  filter: Object;
  durationData: any;
  timeData: any;
  @Output() form = new EventEmitter();

  constructor(fb: FormBuilder) {
    let today = moment();
    this.durationData = DURATION_DATA;
    this.timeData = TIME_DATA;
    let timeArr = moment().add(60, 'minutes').format('HH:mm').split(':');
    let time = timeArr[0] + ':00';
    if (TIME_DATA.indexOf(time) === -1) {
      time = TIME_DATA[0];
      today = moment().add(1, 'days');
    }
    this.filterForm = fb.group({
      date: [today.format('DD/MM/YYYY')],
      time: [time],
      duration: [30],
      capacity: [30],
      features: ['']
    });
    this.filterForm.valueChanges
      .subscribe(
        res => {
          this.form.emit(res);
        }
      );
  }

  ngOnInit() {
    this.form.next(this.filterForm.value);
  }
}
