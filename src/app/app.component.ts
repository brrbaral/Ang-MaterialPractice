import { Component } from '@angular/core';
// import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {DialogExampleComponent} from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineCourseUI';
  constructor( public dialog: MatDialog) {}
  openDialog(){
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'Bishow'}});
    dialogRef.afterClosed().subscribe(result => { //WE GET THE RESULT
      console.log(result);
    });
  }
}
