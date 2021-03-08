import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextMaterialDesingComponent } from './input-text-material-desing.component';

describe('InputTextMaterialDesingComponent', () => {
  let component: InputTextMaterialDesingComponent;
  let fixture: ComponentFixture<InputTextMaterialDesingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputTextMaterialDesingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextMaterialDesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
