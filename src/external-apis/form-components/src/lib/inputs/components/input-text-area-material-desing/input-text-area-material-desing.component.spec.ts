import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextAreaMaterialDesingComponent } from './input-text-area-material-desing.component';

describe('InputTextAreaMaterialDesingComponent', () => {
  let component: InputTextAreaMaterialDesingComponent;
  let fixture: ComponentFixture<InputTextAreaMaterialDesingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextAreaMaterialDesingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextAreaMaterialDesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
