import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealstepComponent } from './healstep.component';

describe('HealstepComponent', () => {
  let component: HealstepComponent;
  let fixture: ComponentFixture<HealstepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealstepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
