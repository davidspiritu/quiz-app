import { of } from 'rxjs';

import { ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator/jest';
import { QuizRepository } from '@quiz/app/shared';
import { Quiz } from '@quiz/app/shared/models/quiz.models';

import { QuizPageComponent } from './quiz-page.component';
import { QuizPageModule } from './quiz-page.module';

describe('QuizPageComponent', () => {
  let spectator: Spectator<QuizPageComponent>;
  const createComponent = createComponentFactory({
    component: QuizPageComponent,
    imports: [QuizPageModule, ReactiveFormsModule],
    declareComponent: false,
    providers: [
      mockProvider(ChangeDetectorRef),
      mockProvider(QuizRepository, {
        startNewGame: jest.fn(),
        evaluate: jest.fn(),
        loaded$: of(true),
        loading$: of(false),
        questions$: of([{ id: '123' } as Quiz]),
        questions: of([{ id: '123' } as Quiz]),
      }),
    ],
    mocks: [Router],
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });
});
