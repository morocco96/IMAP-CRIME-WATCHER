import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedComplaintDetailComponent } from './closed-complaint-detail.component';

describe('ClosedComplaintDetailComponent', () => {
  let component: ClosedComplaintDetailComponent;
  let fixture: ComponentFixture<ClosedComplaintDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedComplaintDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedComplaintDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
