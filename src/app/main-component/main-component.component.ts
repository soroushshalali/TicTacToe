import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
    a:number[]=[];
    b:number[]=[];
    x:number=0;
    y:number=0;
    winner:number=0;
    flag:boolean=false;
    showResult:string;
    counetr:number=0;
    endGame:boolean=false;
    classForUser1:string;
    classForUser2:string;
    startGameFlag:boolean=false;
    resetFlag:boolean=false;
  constructor() { }
  startGame(e){
    if (this.startGameFlag){
      window.location.reload();
    }else{
      this.startGameFlag=true;
      e.target.innerHTML="Reset";
      this.classForUser1="onClass";
      this.classForUser2="offClass";
    }
    console.log(e);
  }
  onClickHandler(parametr , e){
    if (this.startGameFlag){
      if (this.endGame ===false){
        if (e.target.innerHTML == ""){
          this.counetr++;
          this.flag ? this.flag=false : this.flag=true; 
          this.flag ? this.user1(parametr , e) : this.user2(parametr , e);
          this.counetr==9 ? this.result() : "";
        }
      }
      if (this.flag){
        this.classForUser1="offClass";
        this.classForUser2="onClass";
      }else{
        this.classForUser1="onClass";
        this.classForUser2="offClass";
      }
    }
  }
  user1(parametr , e){
    const options = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    this.a[parametr]= 1;
    for (let i=0 ; i< 8 ; i++){
      this.x=0;
      for (let j=0 ; j<3 ; j++){
        if (this.a[options[i][j]] == 1 ){
          this.x++;
          if (this.x == 3){
            this.winner=1;
            this.result();
          }
        }
      }
    }
    e.target.innerHTML="<span style='color: red;'' >x</span>";
  }
  user2(parametr , e){

    const options = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    this.b[parametr]= 2;
    for (let i=0 ; i< 8 ; i++){
      this.y=0;
      for (let j=0 ; j<3 ; j++){
        if (this.b[options[i][j]] == 2 ){
          this.y++;
          if (this.y == 3){
            this.winner=-1;
            this.result();
          }
        }
      }
    }
// e.target.style.backgroundColor="yellow";
e.target.innerHTML="<span style='color: blue;'' >o</span>";
  }
  result(){
    switch(this.winner){
      case 1:
          this.showResult="user1 is Winner";
          this.endGame=true;
          break;
      case -1:
          this.showResult="user2 is Winner";
          this.endGame=true;
          break;
      case 0:
          this.showResult="=";
          this.endGame=true;
    }
  }
  ngOnInit(): void {
  }
}
