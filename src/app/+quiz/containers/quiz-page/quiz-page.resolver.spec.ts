import { ActivatedRouteSnapshot } from '@angular/router';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/jest';
import { QuizRepository } from '@quiz/app/shared';

import { QuizPageResolver } from './quiz-page.resolver';

describe('QuizPageResolver', () => {
  let spectator: SpectatorService<QuizPageResolver>;
  const createService = createServiceFactory({
    service: QuizPageResolver,
    providers: [mockProvider(QuizRepository, { loadQuestions: jest.fn() })],
  });

  it('should be created', () => {
    spectator = createService();
    expect(spectator.service).toBeTruthy();
  });

  it('should call loadQuestions', () => {
    spectator = createService();
    const loadQuestionsSpy = jest.spyOn(
      spectator.inject(QuizRepository),
      'loadQuestions',
    );
    spectator.service.resolve({} as ActivatedRouteSnapshot);
    expect(loadQuestionsSpy).toHaveBeenCalled();
  });
});
