import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogominiComponent } from './logomini.component';

describe('LogominiComponent', () => {
  let component: LogominiComponent;
  let fixture: ComponentFixture<LogominiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogominiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogominiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
