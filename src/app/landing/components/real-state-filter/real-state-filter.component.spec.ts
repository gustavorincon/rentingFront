import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStateFilterComponent } from './real-state-filter.component';

describe('RealStateFilterComponent', () => {
  let component: RealStateFilterComponent;
  let fixture: ComponentFixture<RealStateFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealStateFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealStateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
