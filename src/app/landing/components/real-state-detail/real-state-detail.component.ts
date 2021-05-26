import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-state-detail',
  templateUrl: './real-state-detail.component.html',
  styleUrls: ['./real-state-detail.component.css']
})
export class RealStateDetailComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

  ngOnInit(): void {
  }

}
