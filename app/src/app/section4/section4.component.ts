import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  endSection() {
    this.appService.setCurrentSection('section5');
  }

}
