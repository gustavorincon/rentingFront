import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFilterPropertyDto, FilterPropertyDto } from '../../shared/model/filter-property-dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssetService } from '../../shared/service/asset.service';
import { LocationService } from '../../../shared/service/location.service';
import { ILocation } from '../../../shared/models/city.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  filterForm: FormGroup;
  locations: ILocation[] = [];
  locationData2: ILocation[] = [];

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private locationService: LocationService
              ) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      city: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      rsType: [''],
      fromPrice: ['', [Validators.minLength(6), Validators.maxLength(7)]]
    });

    // TO-DO : esto se usa en varias partes, hacer utilidad o estrategia que solo cargue una vez al iniciar el proyecto
    this.locationService.getAllCities().subscribe(
      (response: any) => {
        console.log('locationService.getAllCities() => ', response);
        this.locationData2 = response;
      },
      error => {
        console.log('Error locationService.getAllCities() ', error);
      }
    );

  }

  private getFilterFormToDto(): IFilterPropertyDto{
    return new FilterPropertyDto(
      '',
      '',
      '',
      '',
      this.filterForm.get(['city']).value,
      '',
      '',
      this.filterForm.get(['fromPrice']).value,
      '0',
      '0',
      '0',
      '0',
      this.filterForm.get(['rsType']).value,
      'false'
      );
  }


  setByFilters(): void {
    if (this.filterForm.invalid) {
      return;
    }
    const filter = this.getFilterFormToDto();
    this.router.navigate([`renta/inicio/busqueda/${filter.city.toLowerCase().split('-')[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`], { queryParams: {rentingprice: `${filter.rentingPrice}`,
    locations: '', type: filter.type, area: `${filter.area}`,
    furnished: `${filter.furnished}`, rooms: `${filter.rooms}`,
    bathrooms: filter.bathrooms + '', parkings: `${filter.parkings}`}});
  }


  getLocationId($event): void {
    const locationId = (event.target as HTMLInputElement).value;
    this.locations = [];
    console.log('locationId = ', locationId);
    if (locationId.length > 2) {
      this.locations = this.searchFromArray(this.locationData2, locationId);
    }
  }


  searchFromArray(arr: ILocation[], regex: string): any[] {
    const matches = [];
    for (const item of arr) {
      if (item.municipio.toUpperCase().startsWith(regex.toUpperCase())) {
        matches.push(item);
      }
    }
    return matches;
  }


}
