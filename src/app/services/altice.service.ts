import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlticeService {
  readonly ApiURL = "http://localhost:8090";

  constructor(private http:HttpClient) { }

  getAlticciNumber(n: number):Observable<number>{
     return this.http.get<number>( this.ApiURL + "/alticci/"+ n);
  }
}
