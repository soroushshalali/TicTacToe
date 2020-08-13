import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  public interpolationUserName1="";
  public interpolationUserName2="";
  public interpolationUserName3="";
  public interpolationUserName4="";
  public fourUsers=false;
  public dataUSers={
    username1 : this.interpolationUserName1,
    username2 : this.interpolationUserName2,
    username3 : this.interpolationUserName3,
    username4 : this.interpolationUserName4,
  }
  @Output() sendData =new EventEmitter;
  constructor() { }
  onSendData(){
    this.sendData.emit(this.dataUSers);
  }
  radioBtnHandler(e){
    this.fourUsers= (e.target.value == "true") ? true : false;
  }


  ngOnInit(): void {
  }

}
