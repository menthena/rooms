import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs';
import {Http, Response, Headers} from 'angular2/http';
import * as _ from 'lodash';

interface IFloorElementsService<T> {
  getObservable() : any;
  addElement(element: T) : void;
  editElement(elementID: string, element: T) : void;
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
  elementIcon?: string;
  features: string;
  capacity?: number;
}

@Injectable()
export class FloorElementsService implements IFloorElementsService<IFloorElement> {
  floorElements: Array<IFloorElement>;
  floorElementsObservable: any;

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

  editElement(elementID, element) {
    this.floorElementsObservable.subscription.next({ type: 'loading' });
    this.http.patch('/api/floor/' + element.floorID + '/elements/' + elementID, JSON.stringify(element), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    .delay(300)
    .subscribe((res: any) => {
      let floorElement = res.json().data;
      let index = _.findIndex(this.floorElements, {elementID: elementID});
      this.floorElements[index] = floorElement;
      this.floorElementsObservable.subscription.next({
        type: 'data',
        data: this.floorElements
      });
    }, (err) => {
      console.log(err);
    });
  }

  addElement(element) {
    this.floorElementsObservable.subscription.next({ type: 'loading' });

    this.http.post('/api/floor/' + element.floorID + '/elements', JSON.stringify(element), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    .delay(400)
    .subscribe((res: any) => {
      let floorElement = res.json().data;
      this.floorElements.push(floorElement);
      this.floorElementsObservable.subscription.next({
        type: 'data',
        data: this.floorElements
      });
    }, (err) => {
      console.log(err);
    });
  }

  fetchElementsByFloorID(floorID: string) {
    let observable = this.http.get('/api/floor/' + floorID + '/elements');
    observable.subscribe((res) => {
      let elementsJson: any = res.json();
      this.floorElements = elementsJson.data;
    }, (err) => {
      console.log(err);
    });
    return observable;
  }
}
