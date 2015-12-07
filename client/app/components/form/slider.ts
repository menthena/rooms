import {Component, OnInit, ElementRef, ViewEncapsulation} from 'angular2/angular2';

declare var jQuery:any;

@Component({
  selector: 'slider',
  styleUrls: ['styles/form/slider.css'],
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content>`
})

export class Slider implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    let sliderElement = jQuery(this.elementRef.nativeElement);
    sliderElement.slider({
      value: 50
    });
  }
};
