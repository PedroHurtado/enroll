import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepothersComponent } from './stepothers.component';

describe('StepothersComponent', () => {
  let component: StepothersComponent;
  let fixture: ComponentFixture<StepothersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepothersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
