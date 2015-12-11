import {Component, OnInit, NgClass, NgFor, NgIf, Observable} from 'angular2/angular2';
import {FloorService, IFloor} from '../../services/FloorService';
import {ReservationService} from '../../services/ReservationService';
import {Floor} from './floor';
import {LoadingIndicator} from '../../directives/loading-indicator';

@Component({
  selector: 'floors',
  providers: [FloorService],
  directives: [NgFor, NgClass, NgIf, Floor, LoadingIndicator],
  template: `
    <loading-indicator *ng-if="isLoading"></loading-indicator>
    <div *ng-if="floors">
      <div *ng-if="floors.length === 0">No floors</div>
      <Floor *ng-for="#floor of floors" [floor]="floor"></Floor>
    </div>
  `
})

export class Floors {
  floors: Array<IFloor>;
  isLoading: boolean;
  designMode: boolean;

  constructor(private floorService: FloorService) {
  }

  fetchAll() {
    this.isLoading = true;
    this.floorService.fetchAll()
      .delay(500)
      .subscribe(
        (res: any) => {
          this.isLoading = false;
          this.floors = res.json().data;
        }
      );
  }

  ngOnInit() {
    this.fetchAll();
  }
}
