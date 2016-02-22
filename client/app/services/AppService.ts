import {Injectable, EventEmitter} from 'angular2/core';
import {Observable} from 'rxjs';
import {Platform} from 'ionic-framework/ionic';

declare var jQuery: any;
declare var window: any;

interface IAppService {
}

@Injectable()
export class AppService implements IAppService {
  public isIonic: boolean;
  public isAndroid: boolean;
  public overlayObservable: Observable<Object>;

  constructor(private Platform: Platform) {
    if (this.Platform && (this.Platform.is('android') || this.Platform.is('ios'))) {
      if (this.Platform.is('android')) {
        this.isAndroid = true;
      }
      this.isIonic = true;
      jQuery('body').addClass('ionic');
    }
    if (Observable) {
      this.overlayObservable = Observable
        .create(observer => {
          return () => console.log('disposed');
        }).publish();
    }
  }
}
