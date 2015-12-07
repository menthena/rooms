import {Injectable, EventEmitter} from 'angular2/angular2';
import {Observable} from 'rxjs';

interface IDesignService {
  getObservable() : Observable<Object>;
}

@Injectable()
export class DesignService implements IDesignService {
  designObservable: Observable<Object>;
  designStateObserver: Observable<boolean>;
  public designModeState: boolean;

  constructor() {
    this.designObservable = Observable
      .create(observer => {
        return () => console.log('disposed');
      }).publish();
  }

  getObservable() {
    return this.designObservable;
  }
}
