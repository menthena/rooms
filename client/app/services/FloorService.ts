import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';

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
  }

  deleteFloor(floorID: string) {
    return this.http.delete('/api/floor/' + floorID);
  }

  addFloor(floorName: string) {
    return this.http.post('/api/floor', JSON.stringify({
      floorName: floorName
    }), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
  }

  updateFloor(floorID: string, floorData: Object) {
    return this.http.patch('/api/floor/' + floorID, JSON.stringify(floorData), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
  }

  changeOrder(floorID: string, direction: string) {
    return this.http.put('/api/floor/change-order', JSON.stringify({
      floorID: floorID,
      direction: direction
    }), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
  }

  fetchAll() {
    return this.http.get('/api/floor');
  }
}
