import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSnackBarModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatSnackBarModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  declarations: [],
  exports: [MatSnackBarModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule]
})
export class MaterialModule {}
