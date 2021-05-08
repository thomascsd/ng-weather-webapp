import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [CommonModule, MatSnackBarModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  declarations: [],
  exports: [MatSnackBarModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule]
})
export class MaterialModule {}
