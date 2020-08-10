import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  
    a:number=[];
    b:number=[];
    x:number=0;
    y:number=0;
    winner:number=-2;
    flag:boolean=false;
    showResult:string;
  constructor() { }
  onClickHandler(parametr){
    this.flag ? this.flag=false : this.flag=true; 
    this.flag ? this.user1(parametr) : this.user2(parametr);

  }
  user1(parametr){

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
    this.a[parametr]='x';
    for (let i=0 ; i< 8 ; i++){
      this.x=0;
      for (let j=0 ; j<3 ; j++){
        if (this.a[options[i][j]] == 'x' ){
          this.x++;
          if (this.x == 3){
            this.winner=1;
            this.result();
          }
        }
      }
    }
console.log(this.winner)
  }
  user2(parametr){

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
    this.b[parametr]='o';
    for (let i=0 ; i< 8 ; i++){
      this.y=0;
      for (let j=0 ; j<3 ; j++){
        if (this.b[options[i][j]] == 'o' ){
          this.y++;
          if (this.y == 3){
            this.winner=-1;
            this.result();
          }
        }
      }
    }
console.log(this.winner)
  }
  result(){
    switch(this.winner){
      case 1:
        this.showResult="user1 is Winner";
        break;
        case -1:
          this.showResult="user1 is Winner";
          break;
          default:
            this.showResult="=";
    }
  }

  ngOnInit(): void {
  }

}
