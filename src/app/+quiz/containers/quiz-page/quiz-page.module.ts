import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@quiz/app/shared';

import { ChoicesFormModule } from '../../components';
import { QuizPageComponent } from './quiz-page.component';
import { QuizPageResolver } from './quiz-page.resolver';

@NgModule({
  declarations: [QuizPageComponent],
  imports: [CommonModule, SharedModule, ChoicesFormModule],
  providers: [QuizPageResolver],
  exports: [QuizPageComponent],
})
export class QuizPageModule {}
