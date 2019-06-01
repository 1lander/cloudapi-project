import { Component, OnInit } from '@angular/core';
import { AirportService, Airport } from '../airport.service';

@Component({
  selector: 'app-airportlist',
  templateUrl: './airportlist.component.html',
  styleUrls: ['./airportlist.component.css']
})
export class AirportlistComponent implements OnInit {
  airports: Airport[];

  constructor(private service: AirportService) { }

  ngOnInit() {
    this.service.GetAirport().subscribe(res => {
      this.airports = res;
      console.log(this.airports)
    })
    
  }

}
