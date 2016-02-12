/// <reference path="../../../typings/tsd.d.ts" />
import {Component, provide} from 'angular2/core';
import {MarketingIndex} from '../../../client/app/components/marketing/index';

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
  tick
} from 'angular2/testing';

describe('header component', () => {

	it('should add string to header names', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(MarketingIndex).then((fixture) => {
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;
      console.log(compiled);

      // expect(compiled).toContainText('Enter PIN');
      // expect(compiled.querySelector('h3')).toHaveText('Status: Enter PIN');
    });
	}));
});
