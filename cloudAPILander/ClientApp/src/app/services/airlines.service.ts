import { Injectable, Inject } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AirlinesService {
  public airline: Airline[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<airline[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
      this.airline = result;
    }, error => console.error(error));
  }

  getAirline(): Observable<Airline> {
    return this.http.get()
  }
}

export interface Geography {
  latitude: number;
  longitude: number;
  altitude: number;
  direction: number;
}

export interface Speed {
  horizontal: number;
  isGround: number;
  vertical: number;
}

export interface Departure {
  iataCode: string;
  icaoCode: string;
}

export interface Arrival {
  iataCode: string;
  icaoCode: string;
}

export interface Aircraft {
  regNumber: string;
  icaoCode: string;
  icao24: string;
  iataCode: string;
}

export interface Airline {
  iataCode: string;
  icaoCode: string;
}

export interface Flight {
  iataNumber: string;
  icaoNumber: string;
  number: string;
}

export interface System {
  updated: string;
  squawk: string;
}

export interface RootObject {
  geography: Geography;
  speed: Speed;
  departure: Departure;
  arrival: Arrival;
  aircraft: Aircraft;
  airline: Airline;
  flight: Flight;
  system: System;
  status: string;
}
