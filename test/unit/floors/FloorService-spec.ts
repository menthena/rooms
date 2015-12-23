/// <reference path="../../../typings/tsd.d.ts" />
import {Component, provide} from 'angular2/core';
import * as Rooms from '../../../client/app/rooms';
import {Floors} from '../../../client/app/components/floors/floors';

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
    return tcb.createAsync(Floors).then((fixture) => {
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;
      console.log(compiled);

      // expect(compiled).toContainText('Enter PIN');
      // expect(compiled.querySelector('h3')).toHaveText('Status: Enter PIN');
    });
	}));
});
