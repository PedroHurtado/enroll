import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviesubjectComponent } from './previesubject.component';

describe('PreviesubjectComponent', () => {
  let component: PreviesubjectComponent;
  let fixture: ComponentFixture<PreviesubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviesubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviesubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
