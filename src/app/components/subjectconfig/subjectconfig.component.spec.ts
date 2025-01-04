import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectconfigComponent } from './subjectconfig.component';

describe('SubjectconfigComponent', () => {
  let component: SubjectconfigComponent;
  let fixture: ComponentFixture<SubjectconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectconfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
