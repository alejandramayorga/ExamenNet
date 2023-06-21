import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaArticulosComponent } from './tienda-articulos.component';

describe('TiendaArticulosComponent', () => {
  let component: TiendaArticulosComponent;
  let fixture: ComponentFixture<TiendaArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaArticulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
