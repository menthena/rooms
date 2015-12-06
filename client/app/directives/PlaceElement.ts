import {Component, OnInit, ElementRef, Input, Injectable} from 'angular2/angular2';

@Component({
  selector: 'place-element',
  template: `<div></div>`
})

@Injectable()
export class PlaceElement implements OnInit {
  constructor(private elementRef: ElementRef) {}

  onInit() {
    console.log(this);
  }
};
