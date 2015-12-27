import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

interface IFloorService<T> {
  fetchAll();
  deleteFloor(floorID: string);
}

export interface IFloor {
  floorID: string;
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

  fetchAll() {
    return this.http.get('/api/floor');
  }
}
