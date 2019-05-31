import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-deleteplane',
  templateUrl: './deleteplane.component.html',
  styleUrls: ['./deleteplane.component.css']
})
export class DeleteplaneComponent implements OnInit {

  private postobj : any = {"id": ""};

  constructor(private Service : AirlineService) { }

  deleteplane(){
    this.Service.DeletePlane(this.postobj);
  }

  ngOnInit() {
  }

}
