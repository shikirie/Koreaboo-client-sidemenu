import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vshow1Page } from './vshow1.page';

describe('Vshow1Page', () => {
  let component: Vshow1Page;
  let fixture: ComponentFixture<Vshow1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vshow1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vshow1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
