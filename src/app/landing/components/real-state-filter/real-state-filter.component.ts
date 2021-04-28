import { Component, OnInit } from '@angular/core';
import { menuList } from '../../../helpers/menuList';

@Component({
  selector: 'app-real-state-filter',
  templateUrl: './real-state-filter.component.html',
  styleUrls: ['./real-state-filter.component.css']
})
export class RealStateFilterComponent implements OnInit {
  menuList = menuList;

  constructor() { }

  ngOnInit(): void {
  }

}
