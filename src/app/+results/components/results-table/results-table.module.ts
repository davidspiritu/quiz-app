import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@quiz/app/shared';

import { ResultsTableComponent } from './results-table.component';

@NgModule({
  declarations: [ResultsTableComponent],
  imports: [CommonModule, SharedModule],
  exports: [ResultsTableComponent],
})
export class ResultsTableModule {}
