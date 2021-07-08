import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitilosFormulariosComponent } from './subtitilos-formularios.component';

describe('SubtitilosFormulariosComponent', () => {
  let component: SubtitilosFormulariosComponent;
  let fixture: ComponentFixture<SubtitilosFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtitilosFormulariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitilosFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
