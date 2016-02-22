import {Component, OnInit, Input, ElementRef, ViewEncapsulation} from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'slider',
  inputs: ['formModel', 'max', 'min', 'range'],
  properties: ['controlName'],
  styleUrls: ['styles/form/slider.css'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-content></ng-content>
  `
})

export class Slider implements OnInit {
  @Input() controlName: string;
  @Input() formModel: any;
  @Input() max: any;
  @Input() min: any;
  @Input() range: any;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    let sliderElement = jQuery(this.elementRef.nativeElement);
    let options: any = {
      range: false,
      max: 50,
      value: this.formModel.value[this.controlName],
      change: (e, obj) => {
        let value = obj.value;
        jQuery('#' + this.controlName).val(value);
        this.formModel.value[this.controlName] = value;
        this.formModel.valueChanges.next(this.formModel.value);
      }
    };
    // if (this.range) {
    //   // options.min = this.min;
    //   options.min = Number(this.min;
    //   options.max = Number(this.max);
    //   console.log(this.min);
    //   options.range = true;
    // }
    sliderElement.slider(options);
  }
};
