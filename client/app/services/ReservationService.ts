import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import * as moment from 'moment';
import {Observable} from 'rxjs';
import {FloorElementsService} from './FloorElementsService';
import {DATE_FORMAT} from '../constants';

export interface IReservation {
  reservationID: string;
  elementID: string;
  reservationDate: string;
  reservationEndDate: string;
  description: string;
}

interface IReservationService {
  saveFilter(filter: Object) : any;
  fetchReservations() : Observable<Object>;
  cancelReservation(reservationID: string, recurring?: boolean) : void;
  transformFilter(filter: Object) : Object;
  makeReservation(reservation: Object) : void;
  getReservationFilterObserver(): Observable<Object>;
  updateTime() : string;
  getObservable() : Observable<string>;
}

@Injectable()
export class ReservationService implements IReservationService {
  public reservationTime: string;
  public reservations: Array<IReservation>;
  public filter: any;
  reservationObserver;
  reservationFilterObserver: any;
  floorElementsObservable;

  constructor(private http: Http, FloorElementsService: FloorElementsService) {
    this.filter = {
      duration: 30,
      capacity: 12,
      features: [],
      date: moment()
    };
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

  updateTime() {
    this.filter.time = moment().add(10, 'minutes').format('h:mma');
    return this.filter.time;
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

  cancelReservation(reservationID: string, recurring?: boolean) {
    let observable = this.http.delete('/api/reservation/' + reservationID + '?recurring=' + recurring);
    let subscription = observable
      .subscribe((res) => {
        let reservation: any = res.json();
        this.reservations = reservation.data;
        if (this.reservationObserver.subscription) {
          // TODO: Refactor
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
    return subscription;
  }

  makeReservation(reservation: Object) {
    this.floorElementsObservable.subscription.next({ type: 'loading' });
    this.filter = _.extend(this.filter, reservation);
    console.log(this.filter, reservation);

    let observable: any = this.http.post('/api/reservation', JSON.stringify(this.filter), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    let subscription = observable
      .delay(400)
      .subscribe((res: any) => {
        let data = res.json().data;
        this.floorElementsObservable.subscription.next({
          type: 'reservation',
          data: data
        });
      });
    return subscription;
  }

  transformFilter(filter) {
    let filterDate = moment(filter.date + ' ' + filter.time, DATE_FORMAT);
    return {
      reservationDate: filterDate,
      reservationEndDate: moment(filterDate).add(filter.duration, 'minutes'),
      capacity: filter.capacity,
      features: filter.features,
      time: filter.time,
      date: moment(filter.date, DATE_FORMAT)
    };
  }

  saveFilter(filter) {
    if (filter) {
      this.filter = this.transformFilter(filter);
      if (filter.time) {
        this.reservationTime = filter.time + ' - ' +
          moment(filter.date + ' ' + filter.time, DATE_FORMAT)
            .add(filter.duration, 'minutes').format('h:mma');
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
