import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient) { }

  GetAirport(name){
    return this.http.get<Airport[]>(`http://localhost:3000/getairport/${name}`);
  }
}

export interface Location {
  longitude: number;
  latitude: number;
}

export interface Airport {
  airportId: string;
  code: string;
  name: string;
  location: Location;
  cityId: string;
  city: string;
  countryCode: string;
  themes: any[];
  pointsOfSale: string;
}

