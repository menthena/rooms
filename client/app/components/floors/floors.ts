import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs';
import {FloorService, IFloor} from '../../services/FloorService';
import {ReservationService} from '../../services/ReservationService';
import {Floor} from './floor';
import {LoadingIndicator} from '../../directives/loading-indicator';

@Component({
  selector: 'floors',
  providers: [FloorService],
  directives: [Floor, LoadingIndicator],
  template: `
    <loading-indicator *ngIf="isLoading"></loading-indicator>
    <div *ngIf="floors">
      <div class="no-floor" *ngIf="floors.length === 0">No floors</div>
      <floor *ngFor="#floor of floors" [floor]="floor"></floor>
    </div>
  `,
  styleUrls: ['styles/floors/floors.css']
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
          console.log(res.json().data);
          this.floors = res.json().data;
        }
      );
  }

  ngOnInit() {
    this.fetchAll();
  }
}
