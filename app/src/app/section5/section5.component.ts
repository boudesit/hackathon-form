import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component implements OnInit {
  private charList: string;
  end: boolean;

  isInConfirmationMode: boolean;
  tryAgain: boolean;
  password: string;

  hide: boolean;

  constructor() { 
    this.charList = 'abcdefghijklmnopqrstuvwxysABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-={}[];:,.<>/?|';
    this.end = false;

    this.isInConfirmationMode = false;
    this.tryAgain = false;
    this.password = '';

    this.hide = true;
  }

  ngOnInit(): void {
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getRandomChar() {
    return this.charList.charAt(this.getRandomInt(this.charList.length));
  }

  reset() {
    this.password = '';
  }

  addChar() {
    this.password += this.getRandomChar();
  }

  validate(passwordConfirmation: string) {
    this.hide = true;
    if(!this.isInConfirmationMode) {
      this.isInConfirmationMode = true;
    } else {
      console.log(passwordConfirmation);
      if(this.password === passwordConfirmation) {
        this.end = true;
      } else {
        this.reset();
        this.isInConfirmationMode = false;
        this.tryAgain = true;
      }
    }
  }

}
