/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../node_modules/angular2/typings/browser.d.ts" />
import {Injectable, Component, provide, View, Injector} from 'angular2/core';
import {AppwideOverlay} from '../../../client/app/components/common/appwide-overlay';
import {AppService} from '../../../client/app/services/AppService';
import {Router, Location} from 'angular2/router';

import {
  iit,
  it,
  ddescribe,
  describe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders,
  fakeAsync,
  tick,
  setBaseTestProviders
} from 'angular2/testing';

import {BaseRequestOptions, Response, ResponseOptions, Http} from 'angular2/http';
import {MockBackend, MockConnection} from 'angular2/http/testing';

// import {
//   TEST_BROWSER_PLATFORM_PROVIDERS,
//   TEST_BROWSER_APPLICATION_PROVIDERS
// } from 'angular2/platform/testing/browser';
//
// setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

class MockAppService {
  constructor() {}
}

export function main() {
  describe('Appwide Overlay', () => {
    let component: AppwideOverlay;
    let appService:AppService = new AppService();

    // beforeEachProviders(() => [
    //   provide(AppService, {useClass: MockAppService})
    // ]);

    beforeEach(() => {
      component = new AppwideOverlay(appService);
    });

    it('should add string to header names', injectAsync([TestComponentBuilder, Injector], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TestComponent).then((fixture) => {
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        console.log(compiled);
        //
        expect(compiled).toContainText('Enter PIN');
        expect(compiled.querySelector('h3')).toHaveText('Status: Enter PIN');
      });
    }));

    it('by default should be hidden', () => {
      expect(component.isActive).not.toBe(true);
    });

    it('should hide the panel when clicking on hide button', () => {
      component.hide();
      expect(component.isActive).toBe(false);
    });

  });
}

@Component({
  viewProviders: [AppService],
  selector: 'test-cmp',
  template: '<appwide-overlay></appwide-overlay>',
  directives: [AppwideOverlay]
})
class TestComponent {}
