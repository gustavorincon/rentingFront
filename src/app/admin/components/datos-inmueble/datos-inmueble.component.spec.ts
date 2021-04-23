import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosInmuebleComponent } from './datos-inmueble.component';

describe('DatosInmuebleComponent', () => {
  let component: DatosInmuebleComponent;
  let fixture: ComponentFixture<DatosInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosInmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
