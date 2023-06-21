import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaproductsComponent } from './tiendaproducts.component';

describe('TiendaproductsComponent', () => {
  let component: TiendaproductsComponent;
  let fixture: ComponentFixture<TiendaproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
