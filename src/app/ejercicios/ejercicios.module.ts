import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioOneComponent } from './pages/ejercicio-one/ejercicio-one.component';
import { EjercicioTwoComponent } from './pages/ejercicio-two/ejercicio-two.component';
import { EjercicioThreeComponent } from './pages/ejercicio-three/ejercicio-three.component';
import { EjerciciosRoutingModule } from './ejercicios-routing.module';



@NgModule({
  declarations: [
    EjercicioOneComponent,
    EjercicioTwoComponent,
    EjercicioThreeComponent
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule
  ]
})
export class EjerciciosModule { }
