import {Component, OnInit, ElementRef, ViewEncapsulation} from 'angular2/angular2';

declare var jQuery:any;

@Component({
  selector: '[button]',
  styleUrls: ['styles/form/button.css'],
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content>`
})

export class Button implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    let buttonElement = jQuery(this.elementRef.nativeElement);
    buttonElement.button({
      text: false
    });
  }
};
