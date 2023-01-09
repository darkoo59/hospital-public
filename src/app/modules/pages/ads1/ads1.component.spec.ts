/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ads1Component } from './ads1.component';

describe('Ads1Component', () => {
  let component: Ads1Component;
  let fixture: ComponentFixture<Ads1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ads1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ads1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
