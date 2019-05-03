import { Component, OnInit } from '@angular/core';
import { AirlinesService } from '../airlines.service';

@Component({
  selector: 'app-fetch-airlinedata',
  templateUrl: './fetch-airlinedata.component.html',
  styleUrls: ['./fetch-airlinedata.component.css']
})
export class FetchAirlinedataComponent implements OnInit {

  constructor(svc: AirlinesService) { }

  ngOnInit() {
  }

}
