import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }
  
  endSection() {
    this.appService.setCurrentSection('section2');
  }
}
