import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectMaterialDesingComponent } from './input-select-material-desing.component';

describe('InputSelectMaterialDesingComponent', () => {
  let component: InputSelectMaterialDesingComponent;
  let fixture: ComponentFixture<InputSelectMaterialDesingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputSelectMaterialDesingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectMaterialDesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
