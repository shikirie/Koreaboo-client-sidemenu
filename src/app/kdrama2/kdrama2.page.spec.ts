import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kdrama2Page } from './kdrama2.page';

describe('Kdrama2Page', () => {
  let component: Kdrama2Page;
  let fixture: ComponentFixture<Kdrama2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kdrama2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kdrama2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
