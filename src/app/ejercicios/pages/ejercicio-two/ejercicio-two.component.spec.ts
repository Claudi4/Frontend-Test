import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioTwoComponent } from './ejercicio-two.component';

describe('EjercicioTwoComponent', () => {
  let component: EjercicioTwoComponent;
  let fixture: ComponentFixture<EjercicioTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
