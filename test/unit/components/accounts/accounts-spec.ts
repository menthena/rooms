/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../node_modules/angular2/typings/browser.d.ts" />
import {MOCK_PROVIDERS} from '../../mockApp';
import {Component, provide, Directive} from '@angular/core';
import {Accounts} from 'components/accounts/accounts';

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
  describe('Accounts', () => {
    it('if the user is logged and the page should show loading indicator',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(Accounts).then((fixture) => {
        fixture.componentInstance.isLogged = true;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('loading-indicator')).not.toBe(null);
      });
    }));

    it('not user logged should be taken to login', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(Accounts).then((fixture) => {
        let redirected = false;
        fixture.componentInstance.isLogged = false;
        // Inline Provider instance Mocking
        fixture.componentInstance.router = {
          navigate() {
            redirected = true;
          }
        };
        fixture.detectChanges();
        expect(redirected).toBe(true);
      });
    }));

    it('should bind data to the view after the data is loaded',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(Accounts).then((fixture) => {
        fixture.componentInstance.isLogged = true;
        fixture.componentInstance.isLoading = false;
        fixture.componentInstance.isIonic = false;
        fixture.componentInstance.userData = {
          name: 'John Doe'
        };
        let element = fixture.nativeElement;
        fixture.detectChanges();
        expect(element.querySelector('#userName').innerHTML).toContain('John Doe');
      });
    }));
  });
}
