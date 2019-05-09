import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vshow2Page } from './vshow2.page';

describe('Vshow2Page', () => {
  let component: Vshow2Page;
  let fixture: ComponentFixture<Vshow2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vshow2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vshow2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
