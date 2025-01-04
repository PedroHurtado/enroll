import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectivesoneComponent } from './electivesone.component';

describe('ElectivesoneComponent', () => {
  let component: ElectivesoneComponent;
  let fixture: ComponentFixture<ElectivesoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectivesoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectivesoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
