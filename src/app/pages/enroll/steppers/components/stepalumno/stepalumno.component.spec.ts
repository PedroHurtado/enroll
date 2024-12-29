import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepalumnoComponent } from './stepalumno.component';

describe('StepalumnoComponent', () => {
  let component: StepalumnoComponent;
  let fixture: ComponentFixture<StepalumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepalumnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
