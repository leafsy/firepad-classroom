import { NgModule } from '@angular/core';
import {
  MatSelectModule, MatSidenavModule, MatExpansionModule, MatToolbarModule,
  MatInputModule, MatListModule, MatButtonModule, MatIconModule, MatCardModule,
  MatTooltipModule, MatButtonToggleModule, MatSnackBarModule, MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSelectModule, MatSidenavModule, MatExpansionModule, MatToolbarModule,
    MatInputModule, MatListModule, MatButtonModule, MatIconModule, MatCardModule,
    MatTooltipModule, MatButtonToggleModule, MatSnackBarModule, MatDialogModule
  ],
  exports: [
    MatSelectModule, MatSidenavModule, MatExpansionModule, MatToolbarModule,
    MatInputModule, MatListModule, MatButtonModule, MatIconModule, MatCardModule,
    MatTooltipModule, MatButtonToggleModule, MatSnackBarModule, MatDialogModule
  ],
})
export class MaterialModule { }
