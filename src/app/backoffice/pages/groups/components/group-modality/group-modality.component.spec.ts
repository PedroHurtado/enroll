import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupModalityComponent } from './group-modality.component';

describe('GroupModalityComponent', () => {
  let component: GroupModalityComponent;
  let fixture: ComponentFixture<GroupModalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupModalityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupModalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
