import {Injectable, Observable} from 'angular2/angular2';

@Injectable()
export class ReservationService {
  reservationObserver: Observable<string>;

  constructor() {
    this.reservationObserver = Observable
      .create(observer => {
        return () => console.log('disposed');
      }).publish();
  }

  getObservable() {
    return this.reservationObserver;
  }
}
