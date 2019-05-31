import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private http: HttpClient) { }

  GetPlanes(){
    return this.http.get<Plane[]>("http://localhost:2574/");
  }
}

export interface Plane {
  id:number;
  manufacturer:String;
  Type:String;
  range:number;
  seats:number;
  length:number;
  heigth:number;
  wingspan:number;
}
