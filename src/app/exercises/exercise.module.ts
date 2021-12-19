import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseOneComponent } from './pages/exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './pages/exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from './pages/exercise-three/exercise-three.component';
import { ExercisesRoutingModule } from './exercise-routing.module';



@NgModule({
  declarations: [
    ExerciseOneComponent,
    ExerciseTwoComponent,
    ExerciseThreeComponent
  ],
  imports: [
    CommonModule,
    ExercisesRoutingModule
  ]
})
export class ExercisesModule { }
