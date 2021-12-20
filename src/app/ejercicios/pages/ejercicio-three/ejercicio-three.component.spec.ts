import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioThreeComponent } from './ejercicio-three.component';

describe('EjercicioThreeComponent', () => {
  let component: EjercicioThreeComponent;
  let fixture: ComponentFixture<EjercicioThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
