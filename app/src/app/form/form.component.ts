import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  dates: Date[] = [];
  datesControl = new FormControl('');
  constructor() { }
  
  ngOnInit(): void {
  }

  addDate() {
    let date = new Date('1904-02-11');
    let endDate = new Date('2022-11-03');
    let i = 0;
    while (date <= endDate) {
      this.dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  }
}
