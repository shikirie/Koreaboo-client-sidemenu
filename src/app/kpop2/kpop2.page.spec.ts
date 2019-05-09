import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kpop2Page } from './kpop2.page';

describe('Kpop2Page', () => {
  let component: Kpop2Page;
  let fixture: ComponentFixture<Kpop2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kpop2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kpop2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
