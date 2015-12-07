import {Injectable} from 'angular2/angular2';
import {Observable} from 'rxjs';

interface IReservationService {
  getObservable() : Observable<string>;
}

@Injectable()
export class ReservationService implements IReservationService {
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
