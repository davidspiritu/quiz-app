import {
  byTestId,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator/jest';
import { Results } from '@quiz/app/shared';

import { ResultsTableComponent } from './results-table.component';
import { ResultsTableModule } from './results-table.module';

const mockResults: Results[] = [
  {
    idx: 1,
    id: '1',
    question: 'foo',
    correct: true,
    answer: 'bar',
    correctedAnswer: 'bar',
  },
  {
    idx: 2,
    id: '2',
    question: 'lorem',
    correct: false,
    answer: 'bar',
    correctedAnswer: 'ipsum',
  },
];

describe('ResultsTableComponent', () => {
  let spectator: Spectator<ResultsTableComponent>;
  const createComponent = createComponentFactory({
    component: ResultsTableComponent,
    imports: [ResultsTableModule],
    declareComponent: false,
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
    expect(spectator.query(byTestId('results-table'))).toBeVisible();
  });

  it('should show results to table', () => {
    spectator = createComponent();
    spectator.setInput('results', mockResults);
    const index = spectator.queryAll('index');
    const question = spectator.queryAll('question');
    const answer = spectator.queryAll('answer');
    const correctedAnswer = spectator.queryAll('correctedAnswer');

    spectator.queryAll('results-table-row').forEach((row, i) => {
      if (!mockResults[i].correct) {
        expect(row).toHaveClass('table-danger');
      }
      expect(index[i]).toContainText(`${mockResults[i].idx}`);
      expect(question[i]).toContainText(`${mockResults[i].question}`);
      expect(answer[i]).toContainText(`${mockResults[i].answer}`);
      expect(correctedAnswer[i]).toContainText(
        `${mockResults[i].correctedAnswer}`,
      );
    });
  });
});
