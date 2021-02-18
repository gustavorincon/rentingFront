import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { 
    console.log('hellooo111');
  }

  ngOnInit(): void {
    console.log('holaaaa');
  }

}
