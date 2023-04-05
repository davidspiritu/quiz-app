import { Subject, takeUntil } from 'rxjs';

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnDestroy,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { QuizItem } from '@quiz/app/shared/models/quiz.models';

export type QuizItemForm = Readonly<{
  id: FormControl<string | null>;
  answer: FormControl<string | null>;
}>;

@Component({
  selector: 'quiz-choices-form',
  templateUrl: './choices-form.component.html',
  styleUrls: ['./choices-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ChoicesFormComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => ChoicesFormComponent),
    },
  ],
})
export class ChoicesFormComponent implements ControlValueAccessor, OnDestroy {
  private justDestroyed = new Subject<null>();
  protected readonly quizItemForm: FormGroup<QuizItemForm> =
    this.createQuizItemForm();

  private _choices: string[] = [];
  private _question = '';

  @Input() set choices(choices: string[]) {
    this._choices = choices;
  }

  get choices() {
    return this._choices;
  }

  @Input() set question(question: string) {
    this._question = question;
  }

  get question() {
    return this._question;
  }

  @Input() set value(value: QuizItem) {
    this.writeValue(value);
  }

  get value() {
    return this.quizItemForm.getRawValue() as QuizItem;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  onChange = (_: QuizItem) => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouch = () => {};

  constructor(
    private formBuilder: FormBuilder,
    private changeDetector: ChangeDetectorRef,
  ) {
    this.quizItemForm.valueChanges
      .pipe(takeUntil(this.justDestroyed))
      .subscribe((value) => {
        this.onChange(value as QuizItem);
        this.onTouch();
        this.changeDetector.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.justDestroyed.next(null);
  }

  writeValue(quiz: QuizItem): void {
    this.quizItemForm.patchValue({
      id: quiz?.id,
      answer: quiz?.answer,
    });
    this.changeDetector.detectChanges();
  }

  registerOnChange(fn: (_: QuizItem) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled
      ? this.quizItemForm.disable({ emitEvent: false })
      : this.quizItemForm.enable({ emitEvent: false });

    this.changeDetector.detectChanges();
  }

  validate(): ValidationErrors | null {
    return this.quizItemForm.invalid ? { invalid: true } : null;
  }

  createQuizItemForm(quiz?: QuizItem): FormGroup<QuizItemForm> {
    const form = this.formBuilder.nonNullable.group<QuizItemForm>({
      id: this.formBuilder.control(quiz?.id || null),
      answer: this.formBuilder.control(null),
    });
    return form;
  }
}
