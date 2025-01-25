import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsubjectComponent } from './dialogsubject.component';

describe('DialogsubjectComponent', () => {
  let component: DialogsubjectComponent;
  let fixture: ComponentFixture<DialogsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogsubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
