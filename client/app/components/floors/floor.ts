/// <reference path="../../../../typings/underscore/underscore.d.ts" />
import {Component, Input, NgFor, NgSwitch, NgSwitchWhen, NgSwitchDefault, Observable} from 'angular2/angular2';
import {IFloor} from '../../services/FloorService';
import {FloorElementsService, IFloorElement} from '../../services/FloorElementsService';
import {Room} from './room';
import {PlaceElement} from '../../directives/PlaceElement';
import * as _ from 'underscore';

@Component({
  selector: 'floor',
  providers: [FloorElementsService],
  directives: [NgFor, NgSwitch, NgSwitchWhen, NgSwitchDefault, Room, PlaceElement],
  styleUrls: ['styles/floors/floor.css'],
  template: `
  <h1>{{ floor.floorName }}</h1>
  <div class="floor">
    <div class="inner">
      <div *ng-for="#element of floorElements" [ng-switch]="element.type">
        <Room *ng-switch-when="room" [data]="element"></Room>
        <Placeholder *ng-switch-default></Placeholder>
      </div>
    </div>
  </div>
  `
})

export class Floor {
  floorElements: Array<IFloorElement>;
  floorElementsService: FloorElementsService;
  @Input() floor: IFloor;

  constructor(FloorElementsService: FloorElementsService) {
    this.floorElementsService = FloorElementsService;

  }

  onInit() {
    this.floorElementsService.fetchElementsByFloorID(this.floor.floorID)
      .map(res => {
        return _.filter(res, { floorID: this.floor.floorID });
      })
      .subscribe(
        (res: any) => {
          this.floorElements = res;
        }
      );
  }

}
