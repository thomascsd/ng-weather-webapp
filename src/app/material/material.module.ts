import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSnackBarModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatSnackBarModule, MatCardModule, MatButtonModule],
  declarations: [],
  exports: [MatSnackBarModule, MatCardModule, MatButtonModule]
})
export class MaterialModule {}
