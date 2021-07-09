import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IProperty } from '../../../shared/models/property.model';
import { AssetService } from '../../shared/service/asset.service';

@Component({
  selector: 'app-real-state-detail',
  templateUrl: './real-state-detail.component.html',
  styleUrls: ['./real-state-detail.component.css']
})
export class RealStateDetailComponent implements OnInit {
  images = [944].map((n) => `https://picsum.photos/id/${n}/900/500`);
  apiLoaded: Observable<boolean>;
  assetRecord: IProperty;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient,
              private assetService: AssetService) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=X', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
    // Loading record from server
    this.getRecordFromId(this.route.snapshot.paramMap.get('code'))
    .subscribe(
      (response: any) => {
        console.log('assetService.filterBy=> ', response);
        this.assetRecord = response;
      },
      error => {
        console.log('Error assetService.filterBy ', error);
      }
    );

  }

  getRecordFromId(id: string): Observable<IProperty>{
    return this.assetService.filterByCode(id);
  }

  contactar(): void {
    this.router.navigate(['/renta/usuario/login']);
  }

}
