import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kmovie1Page } from './kmovie1.page';

describe('Kmovie1Page', () => {
  let component: Kmovie1Page;
  let fixture: ComponentFixture<Kmovie1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kmovie1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kmovie1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
