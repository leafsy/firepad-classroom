import { NgModule } from '@angular/core';
import {
  MatSelectModule, MatInputModule, MatExpansionModule, 
  MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, 
  MatCardModule, MatButtonToggleModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatSelectModule, MatInputModule, MatExpansionModule, 
    MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, 
    MatCardModule, MatButtonToggleModule,
  ],
  exports: [
    MatSelectModule, MatInputModule, MatExpansionModule, 
    MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, 
    MatCardModule, MatButtonToggleModule,
  ],
})
export class MaterialModule { }