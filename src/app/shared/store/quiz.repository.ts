import { catchError, filter, map, Observable, take, throwError } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngneat/elf';
import {
  deleteAllEntities,
  getAllEntities,
  selectAllEntities,
  setEntities,
} from '@ngneat/elf-entities';
import { GameService, QuizService } from '@quiz/app/shared';

import { Evaluation } from '../models/evaluation';
import { Quiz, Quizes, QuizItem } from '../models/quiz.models';
import { QuizStore } from './quiz.store';

@Injectable({ providedIn: 'root' })
export class QuizRepository {
  store: Store;

  get loading$(): Observable<boolean> {
    return this.store.pipe(select((state) => !!state?.loading));
  }

  get loaded$(): Observable<boolean> {
    return this.store.pipe(select((state) => !!state?.loaded));
  }

  get questions$(): Observable<Quiz[]> {
    return this.store.pipe(selectAllEntities());
  }

  get questions(): Quiz[] {
    return this.store.query(getAllEntities());
  }

  get evaluation(): Evaluation {
    return this.store.query((state) => state.evaluation);
  }

  constructor(
    private quizService: QuizService,
    private gameSerivce: GameService,
  ) {
    this.store = new Store(QuizStore);
  }

  setState(newState: Partial<Quizes>) {
    this.store.update((state) => ({ ...state, ...newState }));
  }

  loadQuestions(): void {
    this.setState({ loading: true });
    this.quizService
      .getTrivias()
      .pipe(
        take(1),
        catchError((error) => this.handleError(error)),
      )
      .subscribe((trivia) => {
        const mappedResponse = trivia.map((el) => ({
          ...el,
          loading: false,
          loaded: true,
        }));
        const entity = setEntities(mappedResponse);
        this.setState({ loading: false, loaded: true });
        this.store.update(entity);
      });
  }

  selectQuestion(id: Quiz['id']): Observable<Quiz | undefined> {
    return this.questions$.pipe(
      catchError((error) => this.handleError(error)),
      map((questions) => {
        return questions.find((question) => question.id === id);
      }),
      filter((question) => !!question),
      take(1),
    );
  }

  selectQuestion$(id: Quiz['id']): Quiz | undefined {
    return this.questions.find((question) => question.id === id);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.setState({
      loading: false,
      error: `${error.message || error.status}`,
    });
    return throwError(() => error);
  }

  evaluate(answers: Array<QuizItem>): void {
    const evaluation = this.gameSerivce.evaluateAnswers(
      answers,
      this.questions,
    );
    this.store.update((state) => ({ ...state, evaluation }));
  }

  clearQuestions(): void {
    this.setState({ loading: false, loaded: false, error: null });
    this.store.update(deleteAllEntities());
  }

  startNewGame(loadQuestions: boolean = true): void {
    this.store.update((state) => ({ ...state, evaluation: null }));
    this.gameSerivce.reset();
    this.clearQuestions();
    if (loadQuestions) {
      this.loadQuestions();
    }
  }
}
