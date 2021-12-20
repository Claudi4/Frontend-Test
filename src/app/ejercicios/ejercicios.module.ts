import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioOneComponent } from './pages/ejercicio-one/ejercicio-one.component';
import { EjercicioTwoComponent } from './pages/ejercicio-two/ejercicio-two.component';
import { EjercicioThreeComponent } from './pages/ejercicio-three/ejercicio-three.component';
import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    EjercicioOneComponent,
    EjercicioTwoComponent,
    EjercicioThreeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class EjerciciosModule { }
