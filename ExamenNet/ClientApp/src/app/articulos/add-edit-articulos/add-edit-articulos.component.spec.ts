import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditArticulosComponent } from './add-edit-articulos.component';

describe('AddEditArticulosComponent', () => {
  let component: AddEditArticulosComponent;
  let fixture: ComponentFixture<AddEditArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditArticulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
