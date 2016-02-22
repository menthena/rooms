/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../node_modules/angular2/typings/browser.d.ts" />
import {MOCK_PROVIDERS} from '../../mockApp';
import {Component, provide, Directive} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Floors} from 'components/floors/floors';
import {ReservationService} from 'services/ReservationService';

import {
  it,
  describe,
  xdescribe,
  expect,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';

beforeEachProviders(() => MOCK_PROVIDERS);

export function main() {
  xdescribe('Floors', () => {
    describe('Binding', () => {
      it('Check whether the capacity is set',
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb
        .createAsync(TestComponent).then((fixture) => {
          fixture.detectChanges();
          expect(fixture.nativeElement.querySelector('.capacity span').innerHTML).toBe('5');
        });
      }));
    });
  });
}

@Component({
  selector: 'test-cmp',
  directives: [Floors],
  providers: [],
  template: `<floors></floors>`
})

class TestComponent {
}
