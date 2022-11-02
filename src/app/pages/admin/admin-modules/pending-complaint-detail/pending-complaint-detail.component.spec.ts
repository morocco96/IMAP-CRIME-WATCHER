import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingComplaintDetailComponent } from './pending-complaint-detail.component';

describe('PendingComplaintDetailComponent', () => {
  let component: PendingComplaintDetailComponent;
  let fixture: ComponentFixture<PendingComplaintDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingComplaintDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingComplaintDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
