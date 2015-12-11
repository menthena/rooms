import {Injectable} from 'angular2/angular2';
import {Http, Response, Headers} from 'angular2/http';
import * as moment from 'moment';
import {Observable} from 'rxjs';
import {FloorElementsService} from './FloorElementsService';
import {DATE_FORMAT} from '../constants';

export interface IReservation {
  elementID: string;
  reservationDate: string;
  reservationEndDate: string;
  description: string;
}

interface IReservationService {
  saveFilter(filter: Object) : any;
  fetchReservations() : Observable<Object>;
  transformFilter(filter: Object) : Object;
  makeReservation(elementID: string, description: string) : void;
  getReservationFilterObserver(): Observable<Object>;
  getObservable() : Observable<string>;
}

@Injectable()
export class ReservationService implements IReservationService {
  public reservationTime: string;
  public reservations: Array<IReservation>;
  public filter;
  reservationObserver;
  reservationFilterObserver: any;
  floorElementsObservable;

  constructor(private http: Http, FloorElementsService: FloorElementsService) {
    this.floorElementsObservable = FloorElementsService.getObservable();
    this.floorElementsObservable.connect();
    this.floorElementsObservable
      .subscribe(res => {
        console.log(res);
      });
    this.reservationObserver = Observable
      .create(() => {
        return;
      }).publish();
    this.reservationFilterObserver = Observable
      .create(() => {
        return;
      }).publish();
    this.reservationFilterObserver.connect();
    this.reservationFilterObserver.subscribe(
      res => {
        this.saveFilter(res);
      }
    );
  }

  fetchReservations() {
    let observable = this.http.get('/api/reservation');
    observable
      .subscribe((res) => {
        let reservation: any = res.json();
        this.reservations = reservation.data;
        if (this.reservationObserver.subscription) {
          this.reservationObserver
            .subscription
            .next({
              type: 'reservation',
              data: this.reservations
            });
        }
      }, (err) => {
        console.log(err);
      });
    return observable;
  }

  makeReservation(elementID: string, description: string) {
    this.floorElementsObservable.subscription.next({ type: 'loading' });
    this.filter.description = description;
    this.filter.elementID = elementID;

    this.http.post('/api/reservation', JSON.stringify(this.filter), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    .delay(400)
    .subscribe((res: any) => {
      let data = res.json().data;
      this.floorElementsObservable.subscription.next({
        type: 'reservation',
        data: data
      });
    });
  }

  transformFilter(filter) {
    let filterDate = moment(filter.date + ' ' + filter.time, DATE_FORMAT);
    return {
      reservationDate: filterDate,
      reservationEndDate: moment(filterDate).add(filter.duration, 'minutes')
    };
  }

  saveFilter(filter) {
    if (filter) {
      this.filter = this.transformFilter(filter);
      if (filter.time && filter.time.indexOf(':') > -1) {
        let filterTime: any = String(filter.time).split(':');
        this.reservationTime = filter.time + ' - ' +
          moment().hours(filterTime[0]).minutes(filterTime[1]).add(filter.duration, 'minutes').format('HH:mm');
      }
    }
  }

  getReservationFilterObserver() {
    return this.reservationFilterObserver;
  }

  getObservable() {
    return this.reservationObserver;
  }
}
