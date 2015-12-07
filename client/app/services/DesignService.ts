import {Injectable, EventEmitter} from 'angular2/angular2';
import {Observable} from 'rxjs';

declare var jQuery: any;

interface IDesignService {
  getPercentage(offset: Number, screen: Number) : Number;
  getPosition(event: any, draggable: any) : Object;
  getDimension(event: any, draggable: any) : Object;
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

  getPercentage(value, total) {
    let percentage = (value / total) * 100);
    if (percentage < 0) {
      return 0;
    }
    return percentage;
  }

  getPosition(event, draggable) {
    let element = jQuery(event.target);
    let elementWidth = element.width();
    let elementHeight = element.height();
    let elementOffset = element.offset();
    return {
      x: this.getPercentage(draggable.offset.left - 8 - elementOffset.left, elementWidth),
      y: this.getPercentage(draggable.offset.top - 8 - elementOffset.top, elementHeight)
    };
  }

  getDimension(event, draggable) {
    let element = jQuery(event.target);
    let elementWidth = element.width();
    return {
      width: this.getPercentage(draggable.helper.width(), elementWidth),
      height: draggable.helper.height()
    };
  }

  getObservable() {
    return this.designObservable;
  }
}
