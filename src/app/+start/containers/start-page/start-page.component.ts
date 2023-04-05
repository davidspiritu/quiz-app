import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizRepository } from '@quiz/app/shared';

@Component({
  selector: 'quiz-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartPageComponent {
  constructor(private router: Router, private quizRepository: QuizRepository) {
    this.quizRepository.clearQuestions();
  }
  startQuiz() {
    this.router.navigate(['quiz']);
  }
}
