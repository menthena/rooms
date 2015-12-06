import {Component, OnInit, NgFor, NgIf, Observable} from 'angular2/angular2';
import {FloorService, IFloor} from '../../services/FloorService';
import {ReservationService} from '../../services/ReservationService';
import {Floor} from './Floor';

@Component({
  selector: 'floors',
  providers: [FloorService, ReservationService],
  directives: [NgFor, NgIf, Floor],
  template: `
    <div *ng-if="floors">
      <div *ng-if="floors.length === 0">No floors</div>
      <Floor *ng-for="#floor of floors" [floor]="floor"></Floor>
    </div>
  `
})

export class Floors {
  floors: Array<IFloor>;

  constructor(private floorService: FloorService) {}

  onInit() {
    this.floorService.fetchAll()
      .subscribe(
        (res: any) => {
          this.floors = res;
        }
      );
  }
}
