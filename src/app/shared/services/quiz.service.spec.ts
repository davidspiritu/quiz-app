import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp,
} from '@ngneat/spectator/jest';
import { API_CONFIG } from '@quiz/environments';

import { QuizService } from './quiz.service';

describe('QuizService', () => {
  let spectator: SpectatorHttp<QuizService>;

  const mockUrl = 'www.test.com/';
  const mockTrivias = [
    {
      correctAnswer: 'lorem',
      incorrectAnswers: ['a', 'b', 'c'],
      id: '123',
      question: 'lorem ipsum',
    },
  ];

  const createHttpService = createHttpFactory({
    service: QuizService,
    providers: [
      {
        provide: API_CONFIG,
        useValue: { url: mockUrl, tags: 'tags' },
      },
    ],
  });

  it('should be created', () => {
    spectator = createHttpService();

    expect(spectator.service).toBeTruthy();
  });

  it('should fetch a list of trivias and map it succesfully', (done) => {
    spectator = createHttpService();
    spectator.service.getTrivias().subscribe((response) => {
      expect(response[0].id).toEqual(mockTrivias[0].id);
      expect(response[0].correctAnswer).toEqual(mockTrivias[0].correctAnswer);
      expect(response[0].incorrectAnswers).toEqual(
        mockTrivias[0].incorrectAnswers,
      );
      expect(response[0].question).toEqual(mockTrivias[0].question);
      expect(response[0].choices.length).toEqual(4);

      done();
    });

    const request = spectator.expectOne(
      `${mockUrl}?limit=5&difficulty=easy&tags=tags`,
      HttpMethod.GET,
    );

    request.flush(mockTrivias);
  });
});
