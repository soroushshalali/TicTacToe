import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  public fourUsers=false;
  usersNames={
    UserName1:"",
    UserName2:"",
    UserName3:"",
    UserName4:"",
  };

  constructor() { }
  radioBtnHandler(e){
    this.fourUsers= (e.target.value == "true") ? true : false;
  }


  ngOnInit(): void {
  }

}
