import { filter, take } from 'rxjs';

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizRepository } from '@quiz/app/shared';
import { Quiz, QuizItem } from '@quiz/app/shared/models/quiz.models';

import { QuizForm } from '../../models';

@Component({
  selector: 'quiz-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizPageComponent {
  loaded$ = this.quizRepository.loaded$;
  loading$ = this.quizRepository.loading$;
  questions$ = this.quizRepository.questions$;

  protected readonly quizesFormArray = this.formBuilder.array<
    FormControl<QuizItem>
  >([]);

  protected readonly quizesForm = this.formBuilder.group<QuizForm>({
    quizes: this.quizesFormArray,
  });

  get value() {
    return this.quizesForm.getRawValue();
  }

  selectedIndex = 1;

  get questions() {
    return this.quizRepository.questions;
  }

  constructor(
    private quizRepository: QuizRepository,
    private formBuilder: FormBuilder,
    private changeDetector: ChangeDetectorRef,
    private router: Router,
  ) {
    this.questionSubscription();
  }

  questionSubscription(): void {
    this.questions$
      .pipe(
        filter((questions) => !!questions.length),
        take(1),
      )
      .subscribe((questions) => {
        this.loadQuizes(questions);
      });
  }

  startNewGame(): void {
    this.selectedIndex = 1;
    this.quizesFormArray.clear();
    this.quizRepository.startNewGame();
    this.questionSubscription();
  }

  loadQuizes(quizes: Quiz[]): void {
    this.quizesFormArray.clear();
    for (const quiz of quizes) {
      this.createQuizFormItem(quiz);
    }
    this.quizesFormArray.updateValueAndValidity({ emitEvent: false });
    this.changeDetector.detectChanges();
  }

  createQuizFormItem(quiz: Quiz): void {
    const form = this.formBuilder.nonNullable.control({
      id: quiz.id,
      answer: null,
    });
    this.quizesFormArray.push(form, { emitEvent: false });
  }

  getFormControlArray(index: number) {
    return this.quizesFormArray.controls[index];
  }

  onSubmit() {
    if (!this.value.quizes) return;
    this.quizRepository.evaluate(this.value.quizes);

    this.router.navigate(['results']);
  }

  nextDisabled(): boolean {
    return !this.getFormControlArray(this.selectedIndex - 1)?.value?.answer;
  }

  next() {
    if (this.selectedIndex === this.questions.length) return;
    this.selectedIndex++;
  }

  back() {
    if (this.selectedIndex === 1) return;
    this.selectedIndex--;
  }
}
