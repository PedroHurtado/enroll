import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlllistComponent } from './alllist.component';

describe('AlllistComponent', () => {
  let component: AlllistComponent;
  let fixture: ComponentFixture<AlllistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlllistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
