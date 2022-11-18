import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  endSection() {
    this.appService.setCurrentSection('section4');
  }

}
