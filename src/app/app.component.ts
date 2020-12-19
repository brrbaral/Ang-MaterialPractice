import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineCourseUI';
  constructor(private snackBar: MatSnackBar) {}
  openSnackBar(message, action){
    let snackBarRef = this.snackBar.open(message, action, {duration: 2000});
    snackBarRef.afterDismissed().subscribe(
      () => {
        console.log('The snackbar was dismissed');
      });
    snackBarRef.onAction().subscribe(() => {
      console.log('the snackbar was triggered');
    });
  }
}
