import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-addplane',
  templateUrl: './addplane.component.html',
  styleUrls: ['./addplane.component.css']
})
export class AddplaneComponent implements OnInit {
  
  private postobj : any = {"manufacturer": "", "type": "", "range": "", "seats": "", "length": "", "height": "", "wingspan": ""};

  constructor(private Service : AirlineService) { }

  addplane(){
    this.Service.PostPlane(this.postobj);
  }

  ngOnInit() {
  }

}
