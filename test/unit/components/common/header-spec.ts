/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../node_modules/angular2/typings/browser.d.ts" />
import {MOCK_PROVIDERS} from '../../mockApp';
import {Component, provide, Directive} from '@angular/core';
import {Location} from '@angular/router';
import {Header} from 'components/common/header';

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
  describe('Header', () => {

    describe('Mobile', () => {
      it('On mobile the header should not exists',
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(Header).then((fixture) => {
          fixture.componentInstance.isIonic = true;
          fixture.detectChanges();
          expect(fixture.nativeElement.querySelector('header')).toBe(null);
        });
      }));
    });

    describe('Web', () => {
      it('On index page the header should not exists',
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb
          .overrideProviders(Header, [provide(Location, {useClass: MockLocation})])
          .createAsync(Header).then((fixture) => {
            fixture.componentInstance.isIonic = false;
            fixture.detectChanges();
            expect(fixture.nativeElement.querySelector('header')).not.toBe(null);
          });
      }));
      it(`navigation links should not be present when the user is not logged
        and should show up when the user is logged`,
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb
          .overrideProviders(Header, [provide(Location, {useClass: MockLocation})])
          .createAsync(Header).then((fixture) => {
            fixture.componentInstance.isIonic = false;
            fixture.detectChanges();
            expect(fixture.nativeElement.querySelector('.navigation-links')).toBe(null);

            // Change instance variables and check the HTML
            fixture.componentInstance.logged = true;
            fixture.detectChanges();
            expect(fixture.nativeElement.querySelector('.navigation-links')).not.toBe(null);
          });
        }));

    });

  });
}

// Mock Provider on the go
class MockLocation {
  path() {
    return 'wonderland';
  }
}
