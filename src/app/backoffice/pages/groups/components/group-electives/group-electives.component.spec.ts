import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupElectivesComponent } from './group-electives.component';

describe('GroupElectivesComponent', () => {
  let component: GroupElectivesComponent;
  let fixture: ComponentFixture<GroupElectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupElectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupElectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
