import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ENV_URL} from '../config/app.config';

declare var window: any;

interface IFloorService<T> {
  fetchAll();
  deleteFloor(floorID: string);
  addFloor(floorName: string);
  updateFloor(floorID: string, floorData: Object);
  changeOrder(floorID: string, direction: string);
}

export interface IFloor {
  floorID: string;
  order: number;
  floorName: string;
}

@Injectable()
export class FloorService implements IFloorService<IFloor> {
  floors: Array<IFloor>;

  constructor(private http: Http) {
    this.floors = new Array<IFloor>();
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

  deleteFloor(floorID: string) {
    return this.http.delete(ENV_URL + '/api/floor/' + floorID);
  }

  addFloor(floorName: string) {
    return this.http.post(ENV_URL + '/api/floor', JSON.stringify({
      floorName: floorName
    }), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
  }

  updateFloor(floorID: string, floorData: Object) {
    return this.http.patch(ENV_URL + '/api/floor/' + floorID, JSON.stringify(floorData), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
  }

  changeOrder(floorID: string, direction: string) {
    return this.http.put(ENV_URL + '/api/floor/change-order', JSON.stringify({
      floorID: floorID,
      direction: direction
    }), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
  }

  fetchAll() {
    return this.http.get(ENV_URL + '/api/floor');
  }
}
