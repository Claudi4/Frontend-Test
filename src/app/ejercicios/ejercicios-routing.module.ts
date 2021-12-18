import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CommonModule } from '@angular/common';
import { EjercicioOneComponent } from './pages/ejercicio-one/ejercicio-one.component';
import { EjercicioTwoComponent } from './pages/ejercicio-two/ejercicio-two.component';
import { EjercicioThreeComponent } from './pages/ejercicio-three/ejercicio-three.component';

const routes: Routes = [
  {
    path:"",
    children: [
      {path: "ejercicio-one", component:EjercicioOneComponent},
      {path: "ejercicio-two", component: EjercicioTwoComponent},
      {path: "ejercicio-three", component:EjercicioThreeComponent},
      {path:"**", redirectTo:"ejercicio-one"}
    ]
  }
]

@NgModule({
  //declarations: [],
  imports: [
    //CommonModule
    RouterModule.forChild(routes)
  ],
})
export class EjerciciosRoutingModule { }
