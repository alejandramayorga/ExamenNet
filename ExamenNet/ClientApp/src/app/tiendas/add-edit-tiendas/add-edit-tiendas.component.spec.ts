import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTiendasComponent } from './add-edit-tiendas.component';

describe('AddEditTiendasComponent', () => {
  let component: AddEditTiendasComponent;
  let fixture: ComponentFixture<AddEditTiendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTiendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
