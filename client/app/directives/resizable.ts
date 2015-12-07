import {Directive, OnInit, ElementRef, Input, Injectable} from 'angular2/angular2';

declare var jQuery: any;

@Directive({
  selector: '[resizable-element]'
})

@Injectable()
export class Resizable implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    let nativeElement = this.elementRef.nativeElement;

    jQuery(nativeElement)
      .resizable({
        minHeight: 55,
        minWidth: 50,
        maxWidth: 400,
        maxHeight: 300
      });
  }
};
