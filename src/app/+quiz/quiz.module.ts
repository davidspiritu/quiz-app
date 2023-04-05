import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { QuizPageModule } from './containers';
import { QuizRoutingModule } from './quiz-routing.module';

@NgModule({
  imports: [CommonModule, QuizRoutingModule, QuizPageModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'quiz' }],
})
export class QuizModule {}
