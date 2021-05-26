import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStateDetailComponent } from './real-state-detail.component';

describe('RealStateDetailComponent', () => {
  let component: RealStateDetailComponent;
  let fixture: ComponentFixture<RealStateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealStateDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealStateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
