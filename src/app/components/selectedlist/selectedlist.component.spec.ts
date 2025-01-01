import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedlistComponent } from './selectedlist.component';

describe('SelectedlistComponent', () => {
  let component: SelectedlistComponent;
  let fixture: ComponentFixture<SelectedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
