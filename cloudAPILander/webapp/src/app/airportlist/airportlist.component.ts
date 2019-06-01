import { Component, OnInit } from '@angular/core';
import { AirportService, Airport } from '../airport.service';

@Component({
  selector: 'app-airportlist',
  templateUrl: './airportlist.component.html',
  styleUrls: ['./airportlist.component.css']
})
export class AirportlistComponent implements OnInit {
  airports: Airport[];
  private postobj : any = {"name": ""};
  airportname: String;

  constructor(private service: AirportService) { }

  searchairports(){
    this.service.GetAirport(this.airportname).subscribe(res => {
      this.airports = res;
      console.log(this.airports)
    })
  }

  ngOnInit() {
    this.service.GetAirport("Berlin").subscribe(res => {
      this.airports = res;
    })
  }
}
