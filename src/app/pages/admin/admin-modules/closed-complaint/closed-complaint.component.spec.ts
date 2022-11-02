import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedComplaintComponent } from './closed-complaint.component';

describe('ClosedComplaintComponent', () => {
  let component: ClosedComplaintComponent;
  let fixture: ComponentFixture<ClosedComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
