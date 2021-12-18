import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioOneComponent } from './ejercicio-one.component';

describe('EjercicioOneComponent', () => {
  let component: EjercicioOneComponent;
  let fixture: ComponentFixture<EjercicioOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
