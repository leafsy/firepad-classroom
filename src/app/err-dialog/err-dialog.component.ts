import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-err-dialog',
  templateUrl: './err-dialog.component.html',
  styleUrls: ['./err-dialog.component.less']
})
export class ErrDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ErrDialogComponent>,
    private router: Router,
  ) {}

  onExit() {
    this.router.navigate(['/home']);
  }

}
