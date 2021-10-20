import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url= 'http://loiane.com'
  angularCourse = true;
  imageURL = 'http://lorempixel.com/400/200/nature/';

  constructor() { }

  getValue() {
    return 1;
  }

  likeCourse() {
    return true;
  }

  ngOnInit(): void {
  }

}
