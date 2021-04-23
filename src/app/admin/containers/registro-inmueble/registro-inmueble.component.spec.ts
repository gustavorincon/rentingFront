import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInmuebleComponent } from './registro-inmueble.component';

describe('RegistroInmuebleComponent', () => {
  let component: RegistroInmuebleComponent;
  let fixture: ComponentFixture<RegistroInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroInmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
