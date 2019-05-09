import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kpop1Page } from './kpop1.page';

describe('Kpop1Page', () => {
  let component: Kpop1Page;
  let fixture: ComponentFixture<Kpop1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kpop1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kpop1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
