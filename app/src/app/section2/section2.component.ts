import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  endSection() {
    this.appService.setCurrentSection('section3');
  }

}
