import {Component, OnInit, ElementRef, ViewEncapsulation, Input} from '@angular/core';

declare var jQuery:any;

@Component({
  selector: '[select-menu]',
  inputs: ['formModel'],
  properties: ['controlName', 'selectFormat'],
  styleUrls: ['styles/form/select-menu.css'],
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content>`
})

export class SelectMenu implements OnInit {
  @Input() controlName: string;
  @Input() formModel: any;
  @Input() selectFormat: any;
  constructor(private elementRef: ElementRef) {}

  updateModel(value) {
    jQuery('#' + this.controlName).val(value);
    this.formModel.value[this.controlName] = value;
    this.formModel.valueChanges.next(this.formModel.value);
  }

  ngOnInit() {
    let selectBox = jQuery(this.elementRef.nativeElement);
    let options: any = {
      style: 'popup',
      width: 'auto',
      select: (e, obj) => {
        let value = obj.item.value;
        this.updateModel(value);
      }
    };

    if (this.selectFormat === 'input') {
      options.format = (() => {
        let input = '<input class="other" type="text" value="Other..." />';
        return jQuery('<span/>')
                .append(input)
                .outerHTML;
      });
    }
    selectBox
      .selectmenu(options)
      .selectmenu('menuWidget')
      .addClass('max-selectbox');
    setTimeout(() => {
      selectBox.val(this.formModel.value[this.controlName]);
      selectBox.selectmenu('refresh');
    }, 200);
  }
};
