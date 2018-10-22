import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatSnackBarModule, MatCardModule],
  declarations: [],
  exports: [MatSnackBarModule, MatCardModule]
})
export class MaterialModule {}
