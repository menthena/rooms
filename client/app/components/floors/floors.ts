import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs';
import {FloorService, IFloor} from '../../services/FloorService';
import {AppService} from '../../services/AppService';
import {ReservationService} from '../../services/ReservationService';
import {DesignService} from '../../services/DesignService';
import {Floor} from './floor';
import {LoadingIndicator} from '../../directives/loading-indicator';
import {IONIC_DIRECTIVES} from 'ionic-framework/ionic';

declare var _: any;

@Component({
  selector: 'floors',
  directives: [Floor, LoadingIndicator, IONIC_DIRECTIVES],
  template: `
    <div *ngIf="isIonic">
      <ion-segment>
       <ion-segment-button *ngFor="#floor of floors"
        [ngClass]="{'segment-activated': floor.floorID === selectedFloor}"
        (click)="changeSelectedFloor(floor.floorID)">
         {{ floor.floorName }}
       </ion-segment-button>
      </ion-segment>
    </div>
    <a *ngIf="designMode && floors && floors.length > 0" (click)="addFloor()"
      class="add-floor btn"><i class="fa fa-plus"></i> Add floor</a>
    <loading-indicator *ngIf="isLoading"></loading-indicator>
    <div *ngIf="floors">
      <div class="no-floor text-center" *ngIf="!isLoading && floors.length === 0">
        <div>
          No floors, why don't you add one?
        </div>
        <a *ngIf="designMode" (click)="addFloor()"><i class="fa fa-plus"></i> Add floor</a>
      </div>

      <div *ngFor="#floor of floors">
        <div *ngIf="!isIonic || (isIonic && floor && floor.floorID == selectedFloor)">
          <div *ngIf="designMode" class="pull-right">
            <a (click)="changeOrder(floor.floorID, 'up')" *ngIf="floor.order > 0" class="btn"><i class="fa fa-arrow-up"></i></a>
            <a (click)="changeOrder(floor.floorID, 'down')" *ngIf="floor.order < floors.length - 1"
              class="btn"><i class="fa fa-arrow-down"></i></a>
            <a (click)="showDeleteFloorConfirmation(floor.floorID)" class="btn"><i class="fa fa-trash"></i></a>
          </div>
          <floor [floor]="floor"></floor>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['styles/floors/floors.css']
})

export class Floors {
  floors: Array<IFloor>;
  overlayObservable;
  showConfirmDeletion: boolean;
  isLoading: boolean;
  designMode: boolean;
  isIonic: boolean;
  selectedFloor: string;

  constructor(private floorService: FloorService, private DesignService: DesignService,
    private AppService: AppService) {
    this.overlayObservable = this.AppService.overlayObservable;
    this.isIonic = this.AppService.isIonic;
  }

  ngOnInit() {
    this.fetchAll();
    this.designMode = this.DesignService.designModeState;
    this.overlayObservable
      .subscription
      .subscribe((res) => {
        if (res.type === 'response') {
          if (res.data === true) {
            this.deleteFloor(res.id);
          }
        }
      });
  }

  addFloor() {
    this.isLoading = true;
    this.floorService.addFloor('Untitled floor')
      .delay(500)
      .subscribe(
        (res: any) => {
          this.isLoading = false;
          let floors = res.json().data;
          floors = _.sortBy(floors, 'order');
          this.floors = floors;
        }
      );
  }

  fetchAll() {
    this.isLoading = true;
    this.floorService.fetchAll()
      .subscribe(
        (res: any) => {
          this.isLoading = false;
          let floors = res.json().data;
          floors = _.sortBy(floors, 'order');
          this.floors = floors;
          if (this.isIonic && this.floors.length > 0) {
            this.selectedFloor = this.floors[0].floorID;
          }
        }
      );
  }

  changeSelectedFloor(floorID) {
    this.selectedFloor = floorID;
    console.log(floorID);
  }

  showDeleteFloorConfirmation(id) {
    this.showConfirmDeletion = true;
    if (this.overlayObservable.subscription) {
      this.overlayObservable.subscription
        .next({
          type: 'show',
          message: `You are about to delete a floor. Are you sure you want to do that?
            Be aware that you will also delete the reservations.`,
          panelType: 'confirmation',
          id: id
        });
    }
  }

  deleteFloor(floorID) {
    this.floorService.deleteFloor(floorID)
      .delay(200)
      .subscribe(
        (res: any) => {
          if (res.status === 204) {
            _.remove(this.floors, { floorID: floorID });
          }
        }
      );
  }

  changeOrder(id, direction) {
    this.floorService.changeOrder(id, direction)
      .delay(200)
      .subscribe(
        (res: any) => {
          let floors = res.json().data;
          floors = _.sortBy(floors, 'order');
          this.floors = floors;
        }
      );
  }

}
