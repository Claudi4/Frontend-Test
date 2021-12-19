import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { exercisesModule } from './exercises/exercise.module';

const routes: Routes = [
  {
    path: "exercises",
    loadChildren: () => import("./exercises/exercise.module").then(m => m.exercisesModule)
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
    exercisesModule
  ]
})
export class AppRoutingModule { }
