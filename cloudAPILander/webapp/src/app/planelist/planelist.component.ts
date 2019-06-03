import { Component, OnInit } from '@angular/core';
import { AirlineService, Plane } from '../airline.service';

@Component({
  selector: 'app-planelist',
  templateUrl: './planelist.component.html',
  styleUrls: ['./planelist.component.css']
})
export class PlanelistComponent implements OnInit {
  planes: Plane[];
  filter:any ={};

  constructor(private service : AirlineService) { }
  searchplane(){
  }
  
  onChange(){
    var plane = this.planes;
     if(this.filter.id){
      plane = plane.filter(v => v.id == this.filter.id);
     }
      this.planes = plane;
  }

  ngOnInit() {
    this.service.GetPlanes().subscribe(res => {
      this.planes = res;
    })
  }
}
