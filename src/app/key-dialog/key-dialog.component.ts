import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-key-dialog',
  templateUrl: './key-dialog.component.html',
  styleUrls: ['./key-dialog.component.less'],
})
export class KeyDialogComponent {

  constructor(
  	public dialogRef : MatDialogRef<KeyDialogComponent>,
  	@Inject(MAT_DIALOG_DATA) public data : string,
    private snackBar: MatSnackBar,
  ) {}

  onDismiss() {
  	this.dialogRef.close();
  }

  onCopy() {
    this.snackBar.open('copied link to clipboard', 'OK', { duration: 1500 });
  }

}
