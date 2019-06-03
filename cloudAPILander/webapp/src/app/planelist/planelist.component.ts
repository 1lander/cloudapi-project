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
  pageNum:number = 0;

  constructor(private service : AirlineService) { }

  nextPage(){
    this.pageNum++;
    this.service.GetPlanes(this.pageNum).subscribe(a =>{
      this.planes = a;
    })
    console.log(this.pageNum)
  }
  prevPage(){
    this.pageNum--;
    this.service.GetPlanes(this.pageNum).subscribe(a =>{
      this.planes = a;
    })
  }

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
    this.service.GetPlanes(this.pageNum).subscribe(res => {
      this.planes = res;
    })
  }
}
