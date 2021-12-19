import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioOneComponent } from './pages/ejercicio-one/ejercicio-one.component';
import { EjercicioTwoComponent } from './pages/ejercicio-two/ejercicio-two.component';
import { EjercicioThreeComponent } from './pages/ejercicio-three/ejercicio-three.component';
import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    EjercicioOneComponent,
    EjercicioTwoComponent,
    EjercicioThreeComponent
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule
  ]
})
export class EjerciciosModule { }
