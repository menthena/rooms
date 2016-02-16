import {Injectable, EventEmitter} from 'angular2/core';
import {Observable} from 'rxjs';

declare var jQuery: any;
declare var window: any;

interface IAppService {
}

@Injectable()
export class AppService implements IAppService {
  public isIonic: boolean;
  public overlayObservable: Observable<Object>;

  constructor() {
    if (window.cordova) {
      this.isIonic = true;
      jQuery('body').addClass('ionic');
    }
    this.overlayObservable = Observable
      .create(observer => {
        return () => console.log('disposed');
      }).publish();
  }
}
