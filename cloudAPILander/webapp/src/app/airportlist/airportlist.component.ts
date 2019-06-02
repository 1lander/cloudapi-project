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

  constructor(private service: AirportService) { }

  searchairports(){
    this.service.GetAirport(this.airportname).subscribe(res => {
      this.airports = res;
    })
  }

  ngOnInit() {
    this.service.GetAirport("Antwerp").subscribe(res => {
      this.airports = res;
    })
  }
}
