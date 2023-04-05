import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Evaluation } from '@quiz/app/shared/models/evaluation';

@Component({
  selector: 'quiz-rating-course-table',
  templateUrl: './rating-course-table.component.html',
  styleUrls: ['./rating-course-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingCourseTableComponent {
  private _evaluation: Evaluation = {} as Evaluation;

  get length() {
    return this.evaluation.results?.length;
  }

  get score() {
    return this.evaluation.score;
  }

  get rating() {
    return this.evaluation.rating;
  }

  get courseRecomendation() {
    return this.evaluation.courseRecomendation;
  }

  @Input() set evaluation(evaluation: Evaluation) {
    this._evaluation = evaluation;
  }

  get evaluation() {
    return this._evaluation;
  }
}
