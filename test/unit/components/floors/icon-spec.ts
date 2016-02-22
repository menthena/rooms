/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../node_modules/angular2/typings/browser.d.ts" />
import {MOCK_PROVIDERS} from '../../mockApp';
import {Component, provide, Directive} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Icon} from 'components/floors/icon';
import {ReservationService} from 'services/ReservationService';

import {
  it,
  describe,
  expect,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';

beforeEachProviders(() => MOCK_PROVIDERS);

export function main() {
  describe('Icon', () => {

    describe('Binding', () => {
      it('Check if the data is there',
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb
        .createAsync(TestComponent).then((fixture) => {
          fixture.debugElement.componentInstance.reservations = [];
          fixture.detectChanges();
          expect(fixture.nativeElement.querySelector('.lift')).not.toBe(null);
        });
      }));
    });

  });
}

@Component({
  selector: 'test-cmp',
  directives: [Icon],
  providers: [],
  template: `<icon [data]="data"></icon>`
})

class TestComponent {
  private data: any;

  constructor() {
    this.data = {
      elementType: 'lift'
    };
  }
}
