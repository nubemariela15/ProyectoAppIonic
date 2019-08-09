import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaDiasPage } from './cesta-dias.page';

describe('CestaDiasPage', () => {
  let component: CestaDiasPage;
  let fixture: ComponentFixture<CestaDiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CestaDiasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CestaDiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
