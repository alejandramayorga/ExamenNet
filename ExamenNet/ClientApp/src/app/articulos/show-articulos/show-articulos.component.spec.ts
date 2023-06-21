import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowArticulosComponent } from './show-articulos.component';

describe('ShowArticulosComponent', () => {
  let component: ShowArticulosComponent;
  let fixture: ComponentFixture<ShowArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowArticulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
