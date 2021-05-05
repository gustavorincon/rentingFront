import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisInmueblesComponent } from './mis-inmuebles.component';

describe('MisInmueblesComponent', () => {
  let component: MisInmueblesComponent;
  let fixture: ComponentFixture<MisInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisInmueblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
