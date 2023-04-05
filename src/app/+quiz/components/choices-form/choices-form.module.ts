import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@quiz/app/shared';

import { ChoicesFormComponent } from './choices-form.component';

@NgModule({
  declarations: [ChoicesFormComponent],
  imports: [CommonModule, SharedModule],
  exports: [ChoicesFormComponent],
})
export class ChoicesFormModule {}
