import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@quiz/app/shared';

import { RatingCourseTableComponent } from './rating-course-table.component';

@NgModule({
  declarations: [RatingCourseTableComponent],
  imports: [CommonModule, SharedModule],
  exports: [RatingCourseTableComponent],
})
export class RatingCourseTableModule {}
