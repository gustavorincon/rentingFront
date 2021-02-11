import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificFiltersComponent } from './specific-filters.component';

describe('SpecificFiltersComponent', () => {
  let component: SpecificFiltersComponent;
  let fixture: ComponentFixture<SpecificFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
