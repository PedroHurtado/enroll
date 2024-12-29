import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilysituationComponent } from './familysituation.component';

describe('FamilysituationComponent', () => {
  let component: FamilysituationComponent;
  let fixture: ComponentFixture<FamilysituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilysituationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilysituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
