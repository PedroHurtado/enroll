import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsituationComponent } from './stepsituation.component';

describe('StepsituationComponent', () => {
  let component: StepsituationComponent;
  let fixture: ComponentFixture<StepsituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsituationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
