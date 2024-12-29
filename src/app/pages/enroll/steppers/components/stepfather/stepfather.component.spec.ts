import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepfatherComponent } from './stepfather.component';

describe('StepfatherComponent', () => {
  let component: StepfatherComponent;
  let fixture: ComponentFixture<StepfatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepfatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepfatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
