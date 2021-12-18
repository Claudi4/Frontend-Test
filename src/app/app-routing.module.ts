import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EjerciciosModule } from './ejercicios/ejercicios.module';

const routes: Routes = [
  {
    path: "ejercicios",
    loadChildren: () => import("./ejercicios/ejercicios.module").then(m => m.EjerciciosModule)
  },
  {
    path: "**",
    redirectTo:"ejercicios-one"
  }
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    //CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    EjerciciosModule
  ]
})
export class AppRoutingModule { }
