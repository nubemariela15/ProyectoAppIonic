import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CestasPage } from './cestas.page';

describe('CestasPage', () => {
  let component: CestasPage;
  let fixture: ComponentFixture<CestasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CestasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CestasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
