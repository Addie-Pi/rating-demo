// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'rating-demo';
// }


import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RatingFeedbackDialogComponent } from './rating-feedback-dialog/rating-feedback-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    RatingFeedbackDialogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  openRatingDialog() {
    this.dialog.open(RatingFeedbackDialogComponent, {
      width: '420px',
      disableClose: true,
      data: {}
    });
  }
}
