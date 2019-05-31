import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private http: HttpClient) { }

  GetPlanes(){
    return this.http.get<Plane[]>("http://localhost:2574/api/planes");
  }

  PostPlane(o){
    return this.http.post<Plane[]>("http://localhost:2574/api/planes",{"manufacturer": o.manufacturer,"type": o.type,"range": o.range,"seats": o.seats,"length": o.length,"height": o.height,"wingspan": o.wingspan}).subscribe((data) =>{console.log(data)})
  }

  DeletePlane(o){
    return this.http.delete<Plane[]>(`http://localhost:2574/api/planes/${o.id}`);
  }
}

export interface Plane {
  id:number;
  manufacturer:String;
  Type:String;
  range:number;
  seats:number;
  length:number;
  height:number;
  wingspan:number;
}

