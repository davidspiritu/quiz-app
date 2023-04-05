import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BackendEntities, Utils } from '@quiz/app/shared';
import { API_CONFIG, APIConfig } from '@quiz/environments';

import { Quiz } from '../models/quiz.models';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(
    @Inject(API_CONFIG) private api: APIConfig,
    private http: HttpClient,
  ) {}

  getTrivias(
    limit: number = 5,
    difficulty: 'easy' | 'medium' | 'hard' = 'easy',
  ): Observable<Quiz[]> {
    const tags = this.api.tags;
    const url = this.api.url;
    return this.http
      .get<BackendEntities>(
        `${url}?limit=${limit}&difficulty=${difficulty}&tags=${tags}`,
      )
      .pipe(map((response) => this.mapJsonTriviasToTrivias(response)));
  }

  mapJsonTriviasToTrivias(response: BackendEntities): Quiz[] {
    return response.map((response) => {
      const correctAnswer = response['correctAnswer'];
      const incorrectAnswers = response['incorrectAnswers'] as Array<string>;
      return {
        id: response['id'],
        question: response['question'],
        correctAnswer,
        incorrectAnswers,
        choices: Utils.shuffleArray([...incorrectAnswers, correctAnswer]),
      } as Quiz;
    });
  }
}
