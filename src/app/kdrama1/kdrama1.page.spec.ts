import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kdrama1Page } from './kdrama1.page';

describe('Kdrama1Page', () => {
  let component: Kdrama1Page;
  let fixture: ComponentFixture<Kdrama1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kdrama1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kdrama1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
