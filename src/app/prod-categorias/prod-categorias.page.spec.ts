import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdCategoriasPage } from './prod-categorias.page';

describe('ProdCategoriasPage', () => {
  let component: ProdCategoriasPage;
  let fixture: ComponentFixture<ProdCategoriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdCategoriasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdCategoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
