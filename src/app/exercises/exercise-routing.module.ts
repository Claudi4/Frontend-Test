import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CommonModule } from '@angular/common';
import { ExerciseOneComponent } from './pages/exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './pages/exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from './pages/exercise-three/exercise-three.component';

const routes: Routes = [
  {
    path:"",
    children: [
      {path: "exercise-one", component:ExerciseOneComponent},
      {path: "exercise-two", component: ExerciseTwoComponent},
      {path: "exercise-three", component:ExerciseThreeComponent},
      {path:"**", redirectTo:"exercise-one"}
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
export class exercisesRoutingModule { }
