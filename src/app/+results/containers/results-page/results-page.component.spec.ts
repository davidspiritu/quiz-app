import { Router } from '@angular/router';
import {
  byTestId,
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator/jest';
import { QuizRepository } from '@quiz/app/shared';
import { Evaluation } from '@quiz/app/shared/models/evaluation';

import { ResultsPageComponent } from './results-page.component';
import { ResultsPageModule } from './results-page.module';

const mockQuizRepository: Partial<QuizRepository> = {
  evaluation: { score: 1, rating: 'low' } as Evaluation,
  startNewGame: jest.fn(),
};
describe('ResultsPageComponent', () => {
  let spectator: Spectator<ResultsPageComponent>;
  const createComponent = createComponentFactory({
    component: ResultsPageComponent,
    imports: [ResultsPageModule],
    declareComponent: false,
    providers: [mockProvider(QuizRepository, mockQuizRepository)],
    mocks: [Router],
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });

  it('should start new quiz', () => {
    spectator = createComponent();
    const spyRouter = jest.spyOn(spectator.inject(Router), 'navigate');
    spectator.click(byTestId('start-button'));
    expect(mockQuizRepository.startNewGame).toHaveBeenCalledWith(false);
    expect(spyRouter).toHaveBeenCalledWith(['quiz']);
  });

  it('should start new quiz', () => {
    spectator = createComponent();
    const spyRouter = jest.spyOn(spectator.inject(Router), 'navigate');
    spectator.click(byTestId('home-button'));
    expect(spyRouter).toHaveBeenCalledWith(['']);
  });
});
