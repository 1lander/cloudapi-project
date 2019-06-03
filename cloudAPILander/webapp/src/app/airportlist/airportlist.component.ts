import { Component, OnInit } from '@angular/core';
import { AirportService, Airport } from '../airport.service';

@Component({
  selector: 'app-airportlist',
  templateUrl: './airportlist.component.html',
  styleUrls: ['./airportlist.component.css']
})
export class AirportlistComponent implements OnInit {
  airports: Airport[];
  airportname: String;
  long: any;
  lat: any;

  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          this.callApi(longitude, latitude);
          this.service.GetAirportLoc(latitude,longitude).subscribe(res => {
            this.airports = res;
          })
          console.log(longitude);
          console.log(latitude);
        });
    } else {
       console.log("No support for geolocation")
    }
  }

  callApi(Longitude: number, Latitude: number){
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`
  }

  constructor(private service: AirportService) { }

  searchairports(){
    this.service.GetAirport(this.airportname).subscribe(res => {
      this.airports = res;
    })
  }

  ngOnInit() {
    this.getLocation()
  }
}
