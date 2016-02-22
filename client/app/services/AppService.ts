import {Injectable, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Rx';

declare var jQuery: any;
declare var window: any;

interface IAppService {
}

@Injectable()
export class AppService implements IAppService {
  public isIonic: boolean;
  public isAndroid: boolean;
  public overlayObservable: Observable<Object>;

  constructor() {
    if (Observable) {
      this.overlayObservable = Observable
        .create(observer => {
          return () => console.log('disposed');
        }).publish();
    }
  }
}
