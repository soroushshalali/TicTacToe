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
    user1Name:string;
    user2Name:string;
    classForShowResult:string;
  constructor() { }
  startGame(e){
    console.log("check")
    if (this.startGameFlag){
      // window.location.reload();
      this.again(e);
    }else{
      this.startGameFlag=true;
      e.target.innerHTML="Reset";
      // this.usersName();
      this.classForUser1="onClass";
      this.classForUser2="offClass";
    }
  }
  // usersName(){
  //   this.user1Name=prompt("Schreiben Sie Ihren Namen:");
  //   this.user2Name=prompt("Schreiben Sie Ihren Namen:");
  // }
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
          this.showResult=`${this.user1Name} hat gewonnen.`;
          this.endGame=true;
          this.showResultElement();
          break;
      case -1:
          this.showResult=`${this.user2Name} hat gewonnen.`;
          this.endGame=true;
          this.showResultElement();
          break;
      case 0:
          this.showResult=`${this.user2Name} = ${this.user2Name}`;
          this.endGame=true;
          this.showResultElement();
          break;
    }
  }
  showResultElement(){
    this.classForShowResult="show-result-second";
  }
  again(e){
    this.a=[];
    this.b=[];
    this.x=0;
    this.y=0;
    this.winner=0;
    this.flag=false;
    this.showResult=null;
    this.counetr=0;
    this.endGame=false;
    this.classForUser1=null;
    this.classForUser2=null;
    this.startGameFlag=false;
    this.resetFlag=false;
    this.user1Name=null;
    this.user2Name=null;
    this.classForShowResult=null;
    let arrayDivs=Array.from(document.getElementsByClassName("div-game-borad"));
    for (let i in arrayDivs){
      arrayDivs[i].innerHTML=null;
    }
    this.startGame(e);
  }
  ngOnInit(): void {
  }
}
