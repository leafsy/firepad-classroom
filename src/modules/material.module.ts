import { NgModule } from '@angular/core';
import {
  MatSelectModule, MatInputModule, MatExpansionModule, 
  MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, 
  MatCardModule, MatButtonToggleModule, MatSnackBarModule, MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSelectModule, MatInputModule, MatExpansionModule, 
    MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, 
    MatCardModule, MatButtonToggleModule, MatSnackBarModule, MatDialogModule
  ],
  exports: [
    MatSelectModule, MatInputModule, MatExpansionModule, 
    MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, 
    MatCardModule, MatButtonToggleModule, MatSnackBarModule, MatDialogModule
  ],
})
export class MaterialModule { }