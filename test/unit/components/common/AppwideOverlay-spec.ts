/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../node_modules/angular2/typings/browser.d.ts" />
import {Component, provide} from '@angular/core';
import {AppwideOverlay} from 'components/common/appwide-overlay';
import {AppService} from 'services/AppService';
import {Platform} from 'ionic-framework/ionic';

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

    it('overlay div should not exist by default', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TestComponent).then((fixture) => {
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div.appwide-overlay')).toBe(null);
      });
    }));

    it('overlay div should show up once the observable comes back with data',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TestComponent).then((fixture) => {
        fixture.componentInstance.isPanelActive = true;
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div.appwide-overlay')).not.toBe(null);
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

let device = 'web';

class MockPlatform {
  is(deviceType) {
    return (device === deviceType);
  }
}

@Component({
  providers: [AppService, provide(Platform, {useClass: MockPlatform})],
  selector: 'test-cmp',
  template: '<appwide-overlay [isPanelActive]="isPanelActive"></appwide-overlay>',
  directives: [AppwideOverlay]
})
class TestComponent {
  private isPanelActive: boolean;
}
