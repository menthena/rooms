import {Directive, OnInit, ElementRef, Input, Injectable} from 'angular2/angular2';
import {DesignService} from '../services/DesignService';
import {IFloorElement, FloorElementsService} from '../services/FloorElementsService';

declare var jQuery: any;

@Directive({
  selector: '[droppable-element]'
})

@Injectable()
export class Droppable implements OnInit {
  designObservable;
  floorElementsObservable;

  constructor(private elementRef: ElementRef, DesignService: DesignService, FloorElementsService: FloorElementsService) {
    this.designObservable = DesignService.getObservable();
    this.floorElementsObservable = FloorElementsService.getObservable();
  }

  addNew(data) {
    this.floorElementsObservable
      .subscription
      .next(data);
  }

  ngOnInit() {
    let nativeElement = this.elementRef.nativeElement;
    this.designObservable.connect();

    jQuery(nativeElement).droppable({
      activeClass: 'active-droppable',
      hoverClass: 'active-dropping',
      drop: (e, dropped) => {
        let elementID = dropped.draggable.attr('element-id');
        if (elementID) {
          console.log(elementID);
        } else {
          this.addNew({
            'elementID': '9',
            'floorID': '1',
            'elementName': 'Click to edit',
            'elementType': 'room',
            'elementPositionX': 40,
            'elementPositionY': 25,
            'elementHeight': 0,
            'elementWidth': 10,
            'hasTV': true,
            'capacity': 12
          });
        }
      }
    });
  }
};
