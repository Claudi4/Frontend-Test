import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-three',
  templateUrl: './ejercicio-three.component.html',
  styleUrls: ['./ejercicio-three.component.css']
})
export class EjercicioThreeComponent implements OnInit {
  handleSearch(value:string){
    console.log(value);
    
  }
  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this._http.get("https://jsonplaceholder.typicode.com/users").subscribe(
    (users: any) => this.usuarios = users)
  }
  usuarios:any[] = []

}
