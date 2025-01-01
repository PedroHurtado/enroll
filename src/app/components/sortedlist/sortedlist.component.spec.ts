import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedlistComponent } from './sortedlist.component';

describe('SortedlistComponent', () => {
  let component: SortedlistComponent;
  let fixture: ComponentFixture<SortedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortedlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
