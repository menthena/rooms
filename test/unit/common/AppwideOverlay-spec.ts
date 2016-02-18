/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../node_modules/angular2/typings/browser.d.ts" />
import {Injectable, Component, provide, View, Injector} from 'angular2/core';
import {AppwideOverlay} from '../../../client/app/components/common/appwide-overlay';
import {AppService} from '../../../client/app/services/AppService';
import {Router, Location} from 'angular2/router';

import {
  it,
  describe,
  expect,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders,
} from 'angular2/testing';

export function main() {
  describe('Appwide Overlay', () => {
    let component: AppwideOverlay;
    let appService: AppService = new AppService();

    beforeEach(() => {
      component = new AppwideOverlay(appService);
    });

    it('should add string to header names', injectAsync([TestComponentBuilder, Injector], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TestComponent).then((fixture) => {
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled).toContainText('aa');
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
  providers: [AppService],
  selector: 'test-cmp',
  template: '<appwide-overlay></appwide-overlay>',
  directives: [AppwideOverlay]
})
class TestComponent {}
