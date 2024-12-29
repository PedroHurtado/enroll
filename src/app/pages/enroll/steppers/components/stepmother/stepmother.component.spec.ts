import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepmotherComponent } from './stepmother.component';

describe('StepmotherComponent', () => {
  let component: StepmotherComponent;
  let fixture: ComponentFixture<StepmotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepmotherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepmotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
