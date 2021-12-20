import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-one',
  templateUrl: './ejercicio-one.component.html',
  styleUrls: ['./ejercicio-one.component.css']
})
export class EjercicioOneComponent implements OnInit {

  start = '';
  end = '';
  prims: number [] = [];
  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  calculatePrim() {
    this.prims = [];
    let start = Number(this.start);
    let end = Number(this.end);
    console.log(start, end);
    
    for (let i = start; i < end; i++) {
      if (this.prim(i)) {
        this.prims.push(i);
      }
    }
    console.log(this.prims);
    
  }

  prim(num: number) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    console.log(num);
    
    return num !== 1;
  }
}
