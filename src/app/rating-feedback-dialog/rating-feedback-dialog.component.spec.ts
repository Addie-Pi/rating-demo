import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingFeedbackDialogComponent } from './rating-feedback-dialog.component';

describe('RatingFeedbackDialogComponent', () => {
  let component: RatingFeedbackDialogComponent;
  let fixture: ComponentFixture<RatingFeedbackDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingFeedbackDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatingFeedbackDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
