import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioOneComponent } from './pages/ejercicio-one/ejercicio-one.component';
import { EjercicioTwoComponent } from './pages/ejercicio-two/ejercicio-two.component';
import { EjercicioThreeComponent } from './pages/ejercicio-three/ejercicio-three.component';
import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchComponent } from '../search/search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from '../pipes/search.pipe';


@NgModule({
  declarations: [
    EjercicioOneComponent,
    EjercicioTwoComponent,
    EjercicioThreeComponent,
    NavbarComponent,
    SearchComponent,
    SearchPipe, 
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
    MatListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ]
})
export class EjerciciosModule { }
