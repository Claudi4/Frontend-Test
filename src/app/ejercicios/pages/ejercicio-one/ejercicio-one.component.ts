import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejercicio-one',
  templateUrl: './ejercicio-one.component.html',
  styleUrls: ['./ejercicio-one.component.css']
})
export class EjercicioOneComponent implements OnInit {

  start = '';
  end = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToExampleTwo() {
    this.router.navigate(["ejercicio-two"]);
  }

  calculatePrim() {
    
  }
  

}
