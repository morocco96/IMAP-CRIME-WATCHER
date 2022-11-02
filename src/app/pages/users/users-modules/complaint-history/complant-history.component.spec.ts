import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplantHistoryComponent } from './complant-history.component';

describe('ComplantHistoryComponent', () => {
  let component: ComplantHistoryComponent;
  let fixture: ComponentFixture<ComplantHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplantHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplantHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
