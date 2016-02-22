/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../node_modules/angular2/typings/browser.d.ts" />
import {MOCK_PROVIDERS} from '../../mockApp';
import {Component, provide, Directive} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Room} from 'components/floors/room';
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
  describe('Room', () => {

    describe('Binding', () => {
      it('Check whether the capacity is set',
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb
        .createAsync(TestComponent).then((fixture) => {
          fixture.debugElement.componentInstance.reservations = [];
          fixture.componentInstance.resetFilters();
          fixture.detectChanges();
          expect(fixture.nativeElement.querySelector('.capacity span').innerHTML).toBe('5');
        });
      }));
    });

    describe('Filter', () => {
      it('When the filter capacity is 6 and the room has 5 capacity, it should not match',
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb
        .createAsync(TestComponent).then((fixture) => {
          // Change filters and detect changes
          fixture.componentInstance.setFilters({
            capacity: 6
          });
          fixture.detectChanges();
          expect(fixture.nativeElement.innerHTML).toContain('Not a match');
        });
      }));
    });

    // Inception: Component within a component
    describe('Integration', () => {
      it('Reservation modal should also access the data and the data must be the same',
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb
        .createAsync(TestComponent).then((fixture) => {
          fixture.componentInstance.reservations = [];
          fixture.componentInstance.resetFilters();
          fixture.detectChanges();
          expect(fixture.nativeElement.querySelector('.heading').innerHTML).toContain('Room 303');

          fixture.componentInstance.data = {
            elementName: '303? Not really.'
          };
          fixture.detectChanges();

          expect(fixture.nativeElement.querySelector('.heading').innerHTML).not.toContain('Room 303');

        });
      }));
    });
  });
}

@Component({
  selector: 'test-cmp',
  directives: [Room],
  providers: [],
  template: `<room [data]="data" [reservations]="reservations" [filter]="filter"></room>`
})

class TestComponent {
  private data: any;
  private reservations: any;
  private filter: any;

  constructor() {
    this.data = {
      elementName: 'Room 303',
      capacity: 5
    };
    this.reservations = [];
  }

  setFilters(filter) {
    this.filter = filter;
  }

  resetFilters() {
    this.filter = {};
  }
}
