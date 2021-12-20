import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  PUBLIC_KEY ="999d720d27431ee95c652f25931561cc";
  HASH = "1d42db71eeab68dd9a11ae27b9db6006c60f8be64999d720d27431ee95c652f25931561cc";
  URL_API=`https://gateway.marvel.com:443/v1/public/characters?apikey=${this.PUBLIC_KEY}& hash=${this.HASH} `;

  constructor(private http:HttpClient) { }
  getAllCharacters(): Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any)=> data))
  }
}

