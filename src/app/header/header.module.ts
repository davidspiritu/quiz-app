import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { HeaderToolbarModule } from './header-toolbar';

@NgModule({
  imports: [CommonModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'header' }],
  exports: [HeaderToolbarModule]
})
export class HeaderModule {}
