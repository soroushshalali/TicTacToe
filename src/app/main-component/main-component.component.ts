import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  a: number[] = [];
  b: number[] = [];
  x: number = 0;
  y: number = 0;
  winner: number = 0;
  flag: boolean = false;
  showResult: string;
  counetr: number = 0;
  endGame: boolean = false;
  classForUser1: string;
  classForUser2: string;
  startGameFlag: boolean = false;
  resetFlag: boolean = false;
  user1Name: string;
  user2Name: string;
  classForShowResult: string;
  randomNumber: number[] = [];
  round2: string[] = [];
  clsForNextMAtchBtn: string;
  roundCounter: number = 0;
  displayForStarBtn: string;
  public fourUsers = false;
  usersNames: string[] = [];
  clsForNextBtn: string;
  constructor() { }
  radioBtnHandler(e) {
    this.fourUsers = (e.target.value == "true") ? true : false;
  }
  startGame() {
    if (this.startGameFlag) {
      this.again();
    } else {
      this.startGameFlag = true;
      this.displayForStarBtn = "cls-for-start-bTN"
      this.usersNameShow();
      this.classForUser1 = "onClass";
      this.classForUser2 = "offClass";
    }
  }
  randomFunc() {
    console.log(this.randomNumber)
    for (let i = 0; i < 3; i++) {
      let temp = Math.floor(Math.random() * 3);
      if (this.randomNumber.indexOf(temp) == -1) {
        this.randomNumber.push(temp);
      }
      else i--;
    }
  }
  usersNameShow() {
    if (this.fourUsers) {
      (this.roundCounter < 1) ? this.randomFunc() : null;
      if (this.roundCounter == 0) {
        this.user1Name = this.usersNames[this.randomNumber[0]];
        this.user2Name = this.usersNames[this.randomNumber[1]];
      } else if (this.roundCounter == 1) {
        this.user1Name = this.usersNames[this.randomNumber[2]];
        // this.user2Name = this.usersNames[this.randomNumber[3]];
        this.user2Name = this.usersNames[3];
      }
      this.roundCounter++;
    } else {
      this.user1Name = this.round2[0]
      this.user2Name = this.round2[1]
    }

  }
  onClickHandler(parametr, e) {
    if (this.startGameFlag) {
      if (this.endGame === false) {
        if (e.target.innerHTML == "") {
          this.counetr++;
          this.flag ? this.flag = false : this.flag = true;
          this.flag ? this.user1(parametr, e) : this.user2(parametr, e);
          this.counetr == 9 ? this.result() : "";
        }
      }
      if (this.flag) {
        this.classForUser1 = "offClass";
        this.classForUser2 = "onClass";
      } else {
        this.classForUser1 = "onClass";
        this.classForUser2 = "offClass";
      }
    }
  }
  user1(parametr, e) {
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
    this.a[parametr] = 1;
    for (let i = 0; i < 8; i++) {
      this.x = 0;
      for (let j = 0; j < 3; j++) {
        if (this.a[options[i][j]] == 1) {
          this.x++;
          if (this.x == 3) {
            this.winner = 1;
            this.result();
          }
        }
      }
    }
    e.target.innerHTML = "<span style='color: red;'' >x</span>";
  }
  user2(parametr, e) {

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
    this.b[parametr] = 2;
    for (let i = 0; i < 8; i++) {
      this.y = 0;
      for (let j = 0; j < 3; j++) {
        if (this.b[options[i][j]] == 2) {
          this.y++;
          if (this.y == 3) {
            this.winner = -1;
            this.result();
          }
        }
      }
    }
    // e.target.style.backgroundColor="yellow";
    e.target.innerHTML = "<span style='color: blue;'' >o</span>";
  }
  result() {
    switch (this.winner) {
      case 1:
        this.showResult = `${this.user1Name} hat gewonnen.`;
        this.endGame = true;
        this.showResultElement();
        break;
      case -1:
        this.showResult = `${this.user2Name} hat gewonnen.`;
        this.endGame = true;
        this.showResultElement();
        break;
      case 0:
        this.showResult = `${this.user1Name} = ${this.user2Name}`;
        this.endGame = true;
        this.showResultElement();
        break;
    }

  }
  showResultElement() {
    this.classForShowResult = "show-result-second";
  }
  again(){
    window.location.reload();
  }
  nextMatch() {
    if (this.roundCounter < 2) {
      this.classForShowResult = null;
      this.roundTwo();
    } else {
      this.clsForNextBtn = 'cls-for-next-btn'
    }
  }
  roundTwo(){
    this.a = [];
    this.b = [];
    this.x = 0;
    this.y = 0;
    this.winner = 0;
    this.flag = false;
    this.showResult = null;
    this.counetr = 0;
    this.endGame = false;
    this.classForUser1 = null;
    this.classForUser2 = null;
    this.startGameFlag = false;
    this.resetFlag = false;
    this.classForShowResult = null;
    let arrayDivs = Array.from(document.getElementsByClassName("div-game-borad"));
    for (let i in arrayDivs) {
      arrayDivs[i].innerHTML = null;
    }
    this.startGame();
  }
  ngOnInit(): void {
  }
}
