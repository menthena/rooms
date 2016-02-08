import {Component, OnInit, ElementRef, ViewEncapsulation, Output,
  OnChanges, EventEmitter} from 'angular2/core';
import {FormBuilder, ControlGroup} from 'angular2/common';
import {DatePicker} from '../form/date-picker';
import {TimePicker} from '../form/time-picker';
import {ReservationService} from '../../services/ReservationService';
import {DURATION_DATA, DATE_FORMAT} from '../../constants';
import {SelectMenu} from '../form/select-menu';
import {Slider} from '../form/slider';
import {FeatureList} from '../form/feature-list';
import {Button} from '../form/button';
import {Observable} from 'rxjs';

declare var jQuery:any;
declare var moment:any;

@Component({
  directives: [DatePicker, SelectMenu, Slider, Button, FeatureList, TimePicker],
  selector: 'element-filter',
  outputs: ['form'],
  template: `
  <div class="filter">
    <form [ngFormModel]="filterForm" (ngSubmit)="submitFilterForm($event)">
      <h1>Reserve a room</h1>

      <ul class="list-unstyled row">
        <li class="col-sm-12 col-xs-6 with-icon">
          <div class="input-group">
            <input type="hidden" id="date" name="date" ngControl="date" value="">
            <label for="date">Date</label>
            <date-picker controlName="date" [formModel]="filterForm" [data]="filter"></date-picker>
          </div>
        </li>
        <li class="col-sm-12 col-xs-6 with-icon time">
          <div class="input-group">
            <label for="time">Time</label>
            <i class="fa fa-clock-o"></i>
            <input type="hidden" id="time" name="time" ngControl="time" value="">
            <time-picker controlName="time" [formModel]="filterForm" [data]="filter"></time-picker>
          </div>
        </li>
        <li class="col-sm-12 col-xs-6">
          <div class="input-group">
            <label for="duration">Duration</label>
            <input type="hidden" id="duration" name="duration" ngControl="duration" value="">
            <select controlName="duration" [formModel]="filterForm" name="duration" id="duration" select-menu>
              <option *ngFor="#item of durationData" value="{{ item.value }}">{{ item.text }}</option>
            </select>
          </div>
        </li>
        <li class="col-sm-12 col-xs-6">
          <div class="input-group">
            <label>Min. capacity:<span class="slider-content">({{ filterForm.value.capacity }})</span></label>
            <input type="hidden" id="capacity" name="capacity" ngControl="capacity" value="">
            <slider range="true" min="1" max="60" controlName="capacity" [formModel]="filterForm"></slider>
          </div>
        </li>
        <li class="col-sm-12 col-xs-6">
          <div class="input-group">
            <label>Filter</label>
            <input type="hidden" id="features" name="features" ngControl="features" value="">
            <feature-list controlName="features" [formModel]="filterForm"></feature-list>
          </div>
        </li>
      </ul>
    </form>
  </div>
  `,
  styleUrls: ['styles/filter.css']
})

export class Filter implements OnInit, OnChanges {
  filterForm: ControlGroup;
  filter: Object;
  durationData: any;
  timeData: any;
  time: any;
  today: any;
  @Output() form = new EventEmitter();

  constructor(private fb: FormBuilder, private ReservationService: ReservationService) {
    this.durationData = DURATION_DATA;
    this.updateTime();
    Observable.timer(6000, 6000)
      .subscribe(() => {
        if (moment().diff(moment(this.time, 'h:mma')) > 0) {
          this.updateTime();
          this.updateForm();
        }
      });
  }

  updateTime() {
    this.time = this.ReservationService.updateTime();
    if (this.filterForm) {
      this.filterForm.value.time = this.time;
    }
  }

  updateForm() {
    this.form.next(this.filterForm.value);
  }

  ngOnChanges() {
    console.log('tick');
  }

  ngOnInit() {
    this.filterForm = this.fb.group({
      date: [this.ReservationService.filter.date.format('DD/MM/YYYY')],
      time: [this.time],
      duration: [this.ReservationService.filter.duration],
      capacity: [this.ReservationService.filter.capacity],
      features: [this.ReservationService.filter.feature]
    });
    // this.filter = {
    //   date: this.ReservationService.filter.date.format('DD/MM/YYYY'),
    //   time: this.time,
    //   duration: this.ReservationService.filter.duration,
    //   capacity: this.ReservationService.filter.capacity,
    //   features: this.ReservationService.filter.feature
    // };
    this.filterForm.valueChanges
      .subscribe(
        res => {
          this.form.emit(res);
        }
      );
    this.updateForm();
  }
}
