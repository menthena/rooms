import {Injectable} from 'angular2/angular2';
import {Observable} from 'rxjs';
import {Http, Response} from 'angular2/http';

interface IFloorElementsService<T> {
  getObservable() : Observable<Array<IFloorElement>>;
  fetchElementsByFloorID(floorID: string) : void;
}

export interface IFloorElement {
  elementID: string;
  floorID: string;
  elementName: string;
  elementType: string;
  elementPositionX: number;
  elementPositionY: number;
  elementWidth: number;
  elementHeight: number;
  hasTV?: boolean;
  capacity?: number;
}

@Injectable()
export class FloorElementsService implements IFloorElementsService<IFloorElement> {
  floorElements: Array<IFloorElement>;
  floorElementsObservable: Observable<Array<IFloorElement>>;

  constructor(private http: Http) {
    this.floorElements = new Array<IFloorElement>();
    this.floorElementsObservable = Observable
      .create(observer => {
        return () => console.log('disposed');
      }).publish();
  }

  getObservable() : Observable<Array<IFloorElement>> {
    return this.floorElementsObservable;
  }

  fetchElementsByFloorID(floorID: string) {
    return this.http.get('/api/floorElement');
  }
}
