import {Injectable} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';

interface IFloorElementsService<T> {
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
  hasTV?: boolean;
  capacity?: number;
}

@Injectable()
export class FloorElementsService implements IFloorElementsService<IFloorElement> {
  floorElements: Array<IFloorElement>;

  constructor(private http: Http) {
    this.floorElements = new Array<IFloorElement>();
  }

  fetchElementsByFloorID(floorID: string) {
    return this.http.get('/mock/FloorElements.json')
      .map( (responseData: Response) => {
        return responseData.json();
      });
  }
}
