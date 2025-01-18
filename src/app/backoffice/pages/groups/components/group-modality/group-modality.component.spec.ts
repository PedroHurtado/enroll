import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMolititiesComponent } from './group-modality.component';

describe('GroupMolititiesComponent', () => {
  let component: GroupMolititiesComponent;
  let fixture: ComponentFixture<GroupMolititiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupMolititiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupMolititiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
