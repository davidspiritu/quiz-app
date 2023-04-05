import {
  byTestId,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator/jest';
import { Evaluation } from '@quiz/app/shared/models/evaluation';

import { RatingCourseTableComponent } from './rating-course-table.component';
import { RatingCourseTableModule } from './rating-course-table.module';

const mockEval: Evaluation = {
  score: 1,
  rating: 'average',
  courseRecomendation: ['a2'],
  results: [
    {
      idx: 1,
      id: '1',
      question: 'lorem',
      correct: true,
      answer: 'ipsum',
      correctedAnswer: 'ipsum',
    },
  ],
};

describe('RatingCourseTableComponent', () => {
  let spectator: Spectator<RatingCourseTableComponent>;
  const createComponent = createComponentFactory({
    component: RatingCourseTableComponent,
    imports: [RatingCourseTableModule],
    declareComponent: false,
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
    expect(spectator.query(byTestId('rating-crouse-table'))).toBeVisible();
  });

  it('should show score, rating and course', () => {
    spectator = createComponent();
    spectator.setInput('evaluation', mockEval);
    expect(spectator.query(byTestId('score'))).toContainText(
      `${mockEval.score} / ${mockEval.results.length}`,
    );
    expect(spectator.query(byTestId('rating'))).toContainText(
      `${mockEval.rating}`,
    );
    expect(spectator.query(byTestId('course'))).toContainText(
      `${mockEval.courseRecomendation[0]}`,
    );
  });
});
