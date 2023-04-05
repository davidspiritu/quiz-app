import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@quiz/app/shared';

import { HeaderToolbarComponent } from './header-toolbar.component';

@NgModule({
  declarations: [HeaderToolbarComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderToolbarComponent],
})
export class HeaderToolbarModule {}
