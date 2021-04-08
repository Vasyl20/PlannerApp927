/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InformEventComponent } from './InformEvent.component';

describe('InformEventComponent', () => {
  let component: InformEventComponent;
  let fixture: ComponentFixture<InformEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
