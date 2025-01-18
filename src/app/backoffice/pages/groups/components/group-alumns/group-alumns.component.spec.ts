import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAlumnsComponent } from './group-alumns.component';

describe('GroupAlumnsComponent', () => {
  let component: GroupAlumnsComponent;
  let fixture: ComponentFixture<GroupAlumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupAlumnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupAlumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
