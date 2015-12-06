import {Injectable} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';

interface IFloorService<T> {
  fetchAll();
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

  fetchAll() {
    return this.http.get('/mock/Floors.json')
      .map( (responseData: Response) => {
        return responseData.json();
      });
  }
}
