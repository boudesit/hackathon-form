import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String;
  currentSection: String;

  constructor(
    private appService: AppService
  ) { 
    this.title = 'app';
    this.currentSection = appService.getCurrentSection();
    this.appService.changeCurrentSection.subscribe(currentSection => {
      this.currentSection = currentSection;
    });
  }

}
