import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-real-state-detail',
  templateUrl: './real-state-detail.component.html',
  styleUrls: ['./real-state-detail.component.css']
})
export class RealStateDetailComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  apiLoaded: Observable<boolean>;

  constructor(private router: Router, httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=X', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
  }


  contactar(): void {
    this.router.navigate(['/renta/usuario/login']);
  }

}
