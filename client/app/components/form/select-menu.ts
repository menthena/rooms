import {Component, OnInit, ElementRef, ViewEncapsulation, Input} from 'angular2/angular2';

declare var jQuery:any;

@Component({
  selector: '[select-menu]',
  inputs: ['formModel'],
  properties: ['controlName'],
  styleUrls: ['styles/form/select-menu.css'],
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content>`
})

export class SelectMenu implements OnInit {
  @Input() controlName: string;
  @Input() formModel: any;
  constructor(private elementRef: ElementRef) {}

  updateModel(value) {
    jQuery('#' + this.controlName).val(value);
    this.formModel.value[this.controlName] = value;
    this.formModel.valueChanges.next(this.formModel.value);
  }

  ngOnInit() {
    let selectBox = jQuery(this.elementRef.nativeElement);
    selectBox
      .selectmenu({
        width: 'auto',
        select: (e, obj) => {
          let value = obj.item.value;
          this.updateModel(value);
        }
      })
      .selectmenu('menuWidget')
      .addClass('max-selectbox');
    setTimeout(() => {
      selectBox.val(this.formModel.value[this.controlName]);
      selectBox.selectmenu('refresh');
    }, 200);
  }
};
