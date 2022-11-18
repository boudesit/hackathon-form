import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  charList: String;
  currentSection: String;

  @Output() changeCurrentSection: EventEmitter<String> = new EventEmitter();

  constructor() { 
    this.currentSection = 'section1';
    this.charList = 'abcdefghijklmnopqrstuvwxysABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-={}[];:,.<>/?|';
  }

  public getCurrentSection() {
    return this.currentSection;
  }

  public setCurrentSection(currentSection: String) {
    this.currentSection = currentSection;    
    this.changeCurrentSection.emit(this.currentSection);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getRandomChar() {
    return this.charList.charAt(this.getRandomInt(this.charList.length));
  }
}
