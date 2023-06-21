import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTiendasComponent } from './show-tiendas.component';

describe('ShowTiendasComponent', () => {
  let component: ShowTiendasComponent;
  let fixture: ComponentFixture<ShowTiendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTiendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
