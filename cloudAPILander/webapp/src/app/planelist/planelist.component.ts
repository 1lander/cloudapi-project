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
  dir:String;
  sort:String;

  constructor(private service : AirlineService) { }

  sortbywing(){
    this.sort = "wingspan";
    this.sub();
  }

  sortbyseat(){
    this.sort = "seats";
    this.sub();
  }

  nextPage(){
    this.pageNum++;
    this.sub();
  }

  prevPage(){
    this.pageNum--;
    this.sub();
  }

  sub(){
    this.service.GetPlanes(this.pageNum,this.sort).subscribe(res => {
      this.planes = res;
    })
  }

  ngOnInit() {
    this.sub();
  }
}
