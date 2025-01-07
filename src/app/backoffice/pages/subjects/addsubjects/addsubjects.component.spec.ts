import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubjectsComponent } from './addsubjects.component';

describe('AddsubjectsComponent', () => {
  let component: AddsubjectsComponent;
  let fixture: ComponentFixture<AddsubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddsubjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
