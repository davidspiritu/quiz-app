import { Router } from '@angular/router';
import {
  byTestId,
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator/jest';
import { QuizRepository } from '@quiz/app/shared';

import { StartPageComponent } from './start-page.component';
import { StartPageModule } from './start-page.module';

const mockQuizRepository: Partial<QuizRepository> = {
  clearQuestions: jest.fn(),
};

describe('StartPageComponent', () => {
  let spectator: Spectator<StartPageComponent>;
  const createComponent = createComponentFactory({
    component: StartPageComponent,
    imports: [StartPageModule],
    declareComponent: false,
    providers: [mockProvider(QuizRepository, mockQuizRepository)],
    mocks: [Router],
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
    expect(mockQuizRepository.clearQuestions).toHaveBeenCalled();
  });

  it('should start quiz when button is clicked', () => {
    spectator = createComponent();
    const startQuizSpy = jest.spyOn(spectator.component, 'startQuiz');
    spectator.click(byTestId('start-button'));
    expect(startQuizSpy).toHaveBeenCalled();
  });
});
