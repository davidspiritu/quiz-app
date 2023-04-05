import { FormArray, FormControl } from '@angular/forms';
import { QuizItem } from '@quiz/app/shared/models/quiz.models';

export type QuizForm = Readonly<{
  quizes: FormArray<FormControl<QuizItem>>;
}>;
