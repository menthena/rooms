import {Component, OnInit, ElementRef, ViewEncapsulation, Input} from 'angular2/angular2';

declare var jQuery:any;

@Component({
  selector: '[select-menu]',
  styleUrls: ['styles/form/select-menu.css'],
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content>`
})

export class SelectMenu implements OnInit {
  constructor(private elementRef: ElementRef) {}

  onInit() {
    let selectBox = jQuery(this.elementRef.nativeElement);
    selectBox
      .selectmenu({ width : 'auto' })
      .selectmenu('menuWidget')
      .addClass('max-selectbox');
  }
};
