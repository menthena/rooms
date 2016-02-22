import {Component, OnInit, Input, ElementRef, ViewEncapsulation} from '@angular/core';

declare var jQuery:any;

@Component({
  selector: '[button]',
  inputs: ['formModel'],
  properties: ['controlName'],
  styleUrls: ['styles/form/button.css'],
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content>`
})

export class Button implements OnInit {
  @Input() controlName: string;
  @Input() formModel: any;
  constructor(private elementRef: ElementRef) {}

  getValues() {
    let values = String(this.formModel.value[this.controlName]).split(',');
    if (values.length <= 1 && (values[0] === '' || values[0] === 'null')) {
      values = [];
    }
    return values;
  }

  updateModel(values, value) {
    jQuery('#' + this.controlName).prop('checked', value);
    this.formModel.value[this.controlName] = values;
    this.formModel.valueChanges.next(this.formModel.value);
  }

  ngOnInit() {
    let buttonElement = jQuery(this.elementRef.nativeElement);
    if (typeof buttonElement === 'function') {
      buttonElement.button({
        text: false
      });

      let values = this.getValues();
      let value = buttonElement.prop('id');
      let index = values.indexOf(value);
      if (index > -1) {
        this.updateModel(values, value);
      }

      buttonElement.change((e) => {
        let values = this.getValues();

        let isChecked = jQuery(e.target).prop('checked');
        let value = jQuery(e.target).prop('id');
        let index = values.indexOf(value);
        if (isChecked) {
          if (index === -1) {
            values.push(value);
          }
        } else if (index > -1) {
          values.splice(index, 1);
        }
        this.updateModel(values, value);
      });
    }
  }
};
