import {Component, OnInit, Observable} from 'angular2/angular2';
import {Filter} from './filter';
import {Floors} from '../floors/floors';
import {DesignService} from '../../services/DesignService';
import {ReservationService} from '../../services/ReservationService';

@Component({
  directives: [Filter, Floors],
  selector: 'reserve',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <element-filter (form)="getFormObj($event)"></element-filter>
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
  formObj: Object;
  reservationFilterObserver: any;

  constructor(private DesignService: DesignService, ReservationService: ReservationService) {
    this.DesignService.designModeState = false;
    this.reservationFilterObserver = ReservationService.getReservationFilterObserver();
  }

  getFormObj(formObj) {
    this.formObj = formObj;
    this.reservationFilterObserver
      .subscription
      .next(this.formObj);
  }
}
