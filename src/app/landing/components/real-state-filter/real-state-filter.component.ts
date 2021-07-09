import { Component, OnInit } from '@angular/core';
import { menuList } from '../../../helpers/menuList';
import { Router, ActivatedRoute } from '@angular/router';
import { AssetService } from '../../shared/service/asset.service';
import { IFilterPropertyDto, FilterPropertyDto } from '../../shared/model/filter-property-dto';
import { IProperty } from '../../../shared/models/property.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConstantValues } from '../../../shared/constants/constants-values';
import { ILocation } from '../../../shared/models/city.model';
import { LocationService } from '../../../shared/service/location.service';

@Component({
  selector: 'app-real-state-filter',
  templateUrl: './real-state-filter.component.html',
  styleUrls: ['./real-state-filter.component.css']
})
export class RealStateFilterComponent implements OnInit {
  menuList = menuList;
  filterDto: IFilterPropertyDto;
  availableAssets: IProperty[];
  roomCounter: number;
  bathroomCounter: number;
  parkingCounter: number;
  locations: ILocation[] = [];
  locationData2: ILocation[] = [];

  filterForm: FormGroup;



  constructor(private route: ActivatedRoute,
              private router: Router,
              private assetService: AssetService,
              private formBuilder: FormBuilder,
              private locationService: LocationService ) { }

    ngOnInit(): void {
      this.availableAssets = [];
      const filterDto = this.getFiltersFromRequestParam();
      this.filterForm = this.formBuilder.group({
        city: [filterDto.city, Validators.required],
        rsType: [filterDto.type],
        fromPrice: [filterDto.rentingPrice, [Validators.minLength(6), Validators.maxLength(7)]],
        toPrice: ['', [Validators.minLength(6), Validators.maxLength(7),
          Validators.max(ConstantValues.MAX_RENTING_PRICE), Validators.min(ConstantValues.MIN_RENTING_PRICE)]],
        fromArea: [filterDto.area, [Validators.minLength(6), Validators.maxLength(7),
          Validators.max(ConstantValues.MAX_AREA), Validators.min(ConstantValues.MIN_AREA)]],
        toArea: ['', [Validators.minLength(6), Validators.maxLength(7)]],
        furnished: [filterDto.furnished, Validators.required],
      });
      this.getByFilters();
      console.log('this.availableAssets = ', this.availableAssets);

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

    increment(x: number): number {
      return x += 1;
    }

    decrement(x: number): number {
      if (x <= 0){ return 0; }
      return x -= 1;
    }
  // TO_DO buscar refactor a una utilidad de incrementar cualquier atributo que lo requiera
  // y no solo incrementRooms
    incrementRooms(): void{
      this.roomCounter =  this.increment(this.roomCounter);
      this.applyFilters();
    }
    incrementBathrooms(): void{
      this.bathroomCounter =  this.increment(this.bathroomCounter);
      this.applyFilters();
    }
    incrementParkings(): void{
      this.parkingCounter =  this.increment(this.parkingCounter);
      this.applyFilters();
    }

    decrementRooms(): void{
      this.roomCounter =  this.decrement(this.roomCounter);
      this.applyFilters();
    }
    decrementBathrooms(): void{
      this.bathroomCounter =  this.decrement(this.bathroomCounter);
      this.applyFilters();
    }
    decrementParkings(): void{
      this.parkingCounter =  this.decrement(this.parkingCounter);
      this.applyFilters();
    }

    buildRangeFilter(str1: string, str2: string): string {
      let result = str1;
      if ( str2 !== '' && str2 !== '0'){
        result = `${str1}:${str2}`;
      }
      return result;
    }

    private getFilterDto(): IFilterPropertyDto{
      const priceRange = this.filterForm.get(['fromPrice']).value;

      return new FilterPropertyDto(
        '',
        '',
        'colombia',
        '',
        this.filterForm.get(['city']).value,
        '',
        '',
        this.buildRangeFilter(this.filterForm.get(['fromPrice']).value, this.filterForm.get(['toPrice']).value),
        this.buildRangeFilter(this.filterForm.get(['fromArea']).value, this.filterForm.get(['toArea']).value),
        `${this.roomCounter}`,
        `${this.bathroomCounter}`,
        `${this.parkingCounter}`,
        this.filterForm.get(['rsType']).value,
        this.filterForm.get(['furnished']).value
        );
    }


    getFiltersFromRequestParam(): IFilterPropertyDto{
      let filterResult: IFilterPropertyDto;
      this.route.queryParams
      .subscribe(params => {

        this.roomCounter = +params.rooms;
        this.bathroomCounter = +params.bathrooms;
        this.parkingCounter = +params.parkings;

        filterResult = new FilterPropertyDto(
          params.code,
          params.registrationnumber,
          params.country,
          params.province,
          this.route.snapshot.paramMap.get('city').split('-')[0].normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
          params.description,
          params.state,
          params.rentingprice,
          params.area,
          params.rooms,
          params.bathrooms,
          params.parkings,
          params.type,
          params.furnished
          );
      });

      console.log('this.filterResult = ', filterResult);

      return filterResult;

    }

    applyFilters(): void {
    const filterDto = this.getFilterDto();

    this.router.navigate([`renta/inicio/busqueda/${filterDto.city.toLowerCase().split('-')[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`],
    { queryParams: {rentingprice: `${filterDto.rentingPrice}`,
    locations: '', type: filterDto.type, area: `${filterDto.area}`,
    furnished: `${filterDto.furnished}`, rooms: `${filterDto.rooms}`,
    bathrooms: filterDto.bathrooms + '', parkings: `${filterDto.parkings}`}});
    this.getByFilters();
  }

  getByFilters(): void {
    const filterDto = this.getFilterDto();
    console.log('params es = ', filterDto);

    this.assetService.filterBy(filterDto)
    .subscribe(
      (response: any) => {
        console.log('assetService.filterBy=> ', response);
        this.availableAssets = response;
      },
      error => {
        console.log('Error assetService.filterBy ', error);
      }
    );
  }

  assetDetail(asset: IProperty): void {
    this.router.navigate([`renta/inicio/detalle/${asset.code}`]);
  }

  startRentingProcess(): void {
    this.router.navigate(['/renta/usuario/login']);
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
