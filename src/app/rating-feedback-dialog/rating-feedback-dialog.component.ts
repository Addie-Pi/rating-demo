import { Component, Inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating-feedback-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './rating-feedback-dialog.component.html',
  styleUrl: './rating-feedback-dialog.component.scss'
})
export class RatingFeedbackDialogComponent {
  rating = signal(0);
  hover = signal(0);
  feedback = '';

  stars = Array(5);

  constructor(
    public dialogRef: MatDialogRef<RatingFeedbackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  setRating(val: number) {
    this.rating.set(val);
  }
  setHover(val: number) {
    console.log('setHover', val);
    this.hover.set(val);
  }

  submit() {
    // Fake API, log payload
    console.log('Send Rating:', this.rating(), 'Feedback:', this.feedback);
    setTimeout(() => {
      this.dialogRef.close({ success: true });
    }, 800);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
