import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule
  ],
  declarations: [],
  exports: [NbLayoutModule, NbCardModule]
})
export class NebularModule {}
