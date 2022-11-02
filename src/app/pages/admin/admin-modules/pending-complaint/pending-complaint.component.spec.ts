import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingComplaintComponent } from './pending-complaint.component';

describe('PendingComplaintComponent', () => {
  let component: PendingComplaintComponent;
  let fixture: ComponentFixture<PendingComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
