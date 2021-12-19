import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesModule } from './exercises/exercise.module';

const routes: Routes = [
  {
    path: "exercises",
    loadChildren: () => import("./exercises/exercise.module").then(m => m.ExercisesModule)
  },
  {
    path: "**",
    redirectTo:"exercise-one"
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
    ExercisesModule
  ]
})
export class AppRoutingModule { }
