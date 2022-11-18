import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component implements OnInit {

  isInConfirmationMode: boolean;
  tryAgain: boolean;
  password: string;

  hide: boolean;

  constructor(private appService: AppService) { 

    this.isInConfirmationMode = false;
    this.tryAgain = false;
    this.password = '';

    this.hide = true;
  }

  ngOnInit(): void {
  }

  reset() {
    this.password = '';
  }

  addChar() {
    this.password += this.appService.getRandomChar();
  }

  validate(passwordConfirmation: string) {
    this.hide = true;
    if(!this.isInConfirmationMode) {
      this.isInConfirmationMode = true;
    } else {
      if(this.password !== passwordConfirmation) {
        this.reset();
        this.isInConfirmationMode = false;
        this.tryAgain = true;
      } else {
        this.endSection();
      }
    }
  }

  endSection() {
    this.appService.setCurrentSection('section6');
  }

}
