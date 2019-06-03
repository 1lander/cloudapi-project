import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private http: HttpClient) { }

  GetPlane(id){
    return this.http.get<Plane[]>(`http://localhost:2574/api/planes/${id}`);
  }

  GetPlanes(page){
    return this.http.get<Plane[]>(`http://localhost:2574/api/planes?page=${page}`);
  }

  PostPlane(o){
    this.http.post<Plane[]>("http://localhost:2574/api/planes",{"manufacturer": o.manufacturer,"type": o.type,"range": o.range,"seats": o.seats,"length": o.length,"height": o.height,"wingspan": o.wingspan}).subscribe((data) =>{console.log(data)})
  }

  DeletePlane(o){
    this.http.delete<Plane>(`http://localhost:2574/api/planes/${o.id}`).subscribe();
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

