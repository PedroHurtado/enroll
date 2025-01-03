import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectivestwoComponent } from './electivestwo.component';

describe('ElectivestwoComponent', () => {
  let component: ElectivestwoComponent;
  let fixture: ComponentFixture<ElectivestwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectivestwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectivestwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
