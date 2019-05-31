import { Component, OnInit } from '@angular/core';
import { AirlineService, Plane } from '../airline.service';

@Component({
  selector: 'app-planelist',
  templateUrl: './planelist.component.html',
  styleUrls: ['./planelist.component.css']
})
export class PlanelistComponent implements OnInit {
  planes: Plane[];
  
  constructor(private service : AirlineService) { }

  ngOnInit() {
    this.service.GetPlanes().subscribe(res => {
      this.planes = res;
    })
  }

}
