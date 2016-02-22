/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../node_modules/angular2/typings/browser.d.ts" />
import {MOCK_PROVIDERS} from '../../mockApp';
import {Component, provide, Directive} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Floor} from 'components/floors/floor';
import {ReservationService} from 'services/ReservationService';
import {FloorElementsService} from 'services/FloorElementsService';

import {
  it,
  describe,
  expect,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';

import {BaseRequestOptions, Response, ResponseOptions, Http} from '@angular/http';
import {MockBackend, MockConnection} from 'angular2/http/testing';
beforeEachProviders(() => MOCK_PROVIDERS);

export function main() {
  describe('Floor', () => {

    describe('Binding', () => {
      it('The floor name should be `13th floor`',
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb
        .createAsync(TestComponent).then((fixture) => {
          fixture.detectChanges();
          expect(fixture.nativeElement.querySelector('h1').innerHTML).toContain('13th floor');
        });
      }));
    });

    describe('Design mode', () => {
      it('Design should mode should be activated',
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb
        .createAsync(TestComponent).then((fixture) => {
          fixture.componentInstance.isLoading = false;
          fixture.componentInstance.designMode = true;
          fixture.detectChanges();
          expect(fixture.nativeElement.querySelector('.design-mode')).not.toBe(null);
        });
      }));
    });

    describe('Services', () => {
      it('should get floor elements',
        injectAsync([MockBackend, FloorElementsService], (mockBackend, FloorElementsService) => {
        // Mock pass and fail with Promise.
        return new Promise((pass, fail) => {
          mockBackend.connections.subscribe(
            (connection: MockConnection) => {
              connection.mockRespond(new Response(
                new ResponseOptions({
                    body: [
                      {
                        elementID: 2
                      }]
                  }
                )));
            });

          FloorElementsService.fetchElementsByFloorID(1).subscribe(
            (res) => {
              let data = res.json();
              expect(data[0].elementID).toBe(2);
              pass(data);
            });
        });
      }));
    });

  });
}

@Component({
  selector: 'test-cmp',
  directives: [Floor],
  providers: [],
  template: `<floor [floor]="data" [designMode]="designMode" [isLoading]="isLoading"></floor>`
})

// Mock component
class TestComponent {
  private data: any;
  private isLoading: any;
  private designMode: any = true;

  constructor() {
    this.data = {
      floorID: 1,
      floorName: '13th floor'
    };
  }

}
