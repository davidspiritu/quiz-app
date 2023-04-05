import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@quiz/app/shared';

import { StartPageComponent } from './start-page.component';

@NgModule({
  declarations: [StartPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [StartPageComponent],
})
export class StartPageModule {}
