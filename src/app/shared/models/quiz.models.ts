import { Entity } from '@quiz/app/shared';
import { Evaluation } from '@quiz/app/shared/models/evaluation';

export type Quiz = Entity &
  Readonly<{
    question: string;
    choices: string[];
    correctAnswer: string;
    incorrectAnswers: string[];
  }>;

export type Quizes = Entity &
  Readonly<{
    trivias: Quiz[];
    evaluation?: Evaluation;
  }>;
