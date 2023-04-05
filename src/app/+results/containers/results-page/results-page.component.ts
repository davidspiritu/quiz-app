import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizRepository } from '@quiz/app/shared';

@Component({
  selector: 'quiz-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsPageComponent {
  get evaluation() {
    return this.quizRepository?.evaluation;
  }

  get results() {
    return this.evaluation?.results;
  }

  constructor(private quizRepository: QuizRepository, private router: Router) {}

  startQuiz(): void {
    this.quizRepository.startNewGame(false);
    this.router.navigate(['quiz']);
  }

  home(): void {
    this.router.navigate(['']);
  }
}
