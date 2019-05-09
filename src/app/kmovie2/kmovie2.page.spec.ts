import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kmovie2Page } from './kmovie2.page';

describe('Kmovie2Page', () => {
  let component: Kmovie2Page;
  let fixture: ComponentFixture<Kmovie2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kmovie2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kmovie2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
