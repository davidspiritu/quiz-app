import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@quiz/app/shared';

import { RatingCourseTableModule, ResultsTableModule } from '../../components';
import { ResultsPageComponent } from './results-page.component';

@NgModule({
  declarations: [ResultsPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    ResultsTableModule,
    RatingCourseTableModule,
  ],
  exports: [ResultsPageComponent],
})
export class ResultsPageModule {}
