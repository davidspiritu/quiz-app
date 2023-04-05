import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { QuizRepository } from '@quiz/app/shared';

@Injectable()
export class QuizPageResolver implements Resolve<void> {
  constructor(private quizRepository: QuizRepository) {}

  /* eslint-disable @typescript-eslint/no-unused-vars */
  resolve(route: ActivatedRouteSnapshot): void {
    this.quizRepository.loadQuestions();
    return;
  }
}
