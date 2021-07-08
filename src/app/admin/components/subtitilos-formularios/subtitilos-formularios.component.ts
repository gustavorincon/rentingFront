import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtitilos-formularios',
  templateUrl: './subtitilos-formularios.component.html',
  styleUrls: ['./subtitilos-formularios.component.scss']
})
export class SubtitilosFormulariosComponent implements OnInit {

  @Input() titulo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
