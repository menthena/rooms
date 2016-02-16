import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs';
import {Http, Response, Headers} from 'angular2/http';
import {ENV_URL} from '../app.config';

declare var _: any;

interface IFloorElementsService<T> {
  getObservable() : any;
  addElement(element: T) : void;
  editElement(elementID: string, element: T) : void;
  deleteElement(floorID: string, elementID: string) : void;
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
  elementVertical?: boolean;
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
    // TODO: Use official Angular2 CORS support when merged (https://github.com/angular/angular/issues/4231).
    if ((<any> this.http)._backend._browserXHR) {
      let _build = (<any> this.http)._backend._browserXHR.build;
      (<any> this.http)._backend._browserXHR.build = () => {
        let _xhr =  _build();
        _xhr.withCredentials = true;
        return _xhr;
      };
    }
  }

  getObservable() : Observable<Array<IFloorElement>> {
    return this.floorElementsObservable;
  }

  editElement(elementID, element) {
    this.floorElementsObservable.subscription.next({ type: 'loading' });
    this.http.patch(ENV_URL + '/api/floor/' + element.floorID + '/elements/' + elementID, JSON.stringify(element), {
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

    this.http.post(ENV_URL + '/api/floor/' + element.floorID + '/elements', JSON.stringify(element), {
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

  deleteElement(floorID: string, elementID: string) {
    this.floorElementsObservable.subscription.next({ type: 'loading' });

    this.http.delete(ENV_URL + '/api/floor/' + floorID + '/elements/' + elementID, {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    .delay(400)
    .subscribe((res: any) => {
      _.remove(this.floorElements, (element) => {
        return String(element.elementID) === String(elementID);
      });
      this.floorElementsObservable.subscription.next({
        type: 'data',
        data: this.floorElements
      });
    }, (err) => {
      console.log(err);
    });
  }

  fetchElementsByFloorID(floorID: string) {
    let observable = this.http.get(ENV_URL + '/api/floor/' + floorID + '/elements');
    observable.subscribe((res) => {
      let elementsJson: any = res.json();
      this.floorElements = elementsJson.data;
    }, (err) => {
      console.log(err);
    });
    return observable;
  }
}
