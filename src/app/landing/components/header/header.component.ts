import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFilterPropertyDto, FilterPropertyDto } from '../../shared/model/filter-property-dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssetService } from '../../shared/service/asset.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  filterForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private assetService: AssetService) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      city: ['', Validators.required],
      rsType: ['', [Validators.minLength(5), Validators.maxLength(15)]],
      fromPrice: ['', [Validators.minLength(5), Validators.maxLength(6)]]
    });
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
      0,
      0,
      0,
      0,
      this.filterForm.get(['rsType']).value,
      false
      );
  }


  getProperiesByFilters(): void {
    this.router.navigate(['renta/inicio/busqueda']);
  }
}
