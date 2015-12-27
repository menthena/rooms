import {Injectable, EventEmitter} from 'angular2/core';
import {Observable} from 'rxjs';

declare var jQuery: any;

interface IAppService {
}

@Injectable()
export class AppService implements IAppService {
  public overlayObservable: Observable<Object>;

  constructor() {
    this.overlayObservable = Observable
      .create(observer => {
        return () => console.log('disposed');
      }).publish();
  }
}
