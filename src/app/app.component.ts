import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend-Test';
  constructor(private router: Router){

  }
  goToExercise(opt: number) {
    switch (opt) {
      case 1:
        this.router.navigate(["ejercicio-one"]);
        break;
      case 2:
        this.router.navigate(["ejercicio-two"]);
        break;
      case 3:
        this.router.navigate(["ejercicio-three"]);
        break;
      default:
        break;
    }
  }
}
