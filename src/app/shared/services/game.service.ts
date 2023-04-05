/* eslint-disable  @typescript-eslint/no-non-null-assertion */

import { Injectable } from '@angular/core';

import { Course, Rating } from '../constants';
import { Results } from '../models';
import { Evaluation } from '../models/evaluation';
import { Quiz, QuizItem } from '../models/quiz.models';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private questions!: Quiz[];

  protected readonly courseRecomendatiopnMap: Record<Rating, Course[]> = {
    [Rating.Fail]: [Course.b2First, Course.c1Advance],
    [Rating.Low]: [Course.b2First, Course.c1Advance],
    [Rating.Average]: [Course.b2Schools],
    [Rating.High]: [Course.b1Preliminary, Course.a2],
  };

  evaluateAnswers(answers: Array<QuizItem>, questions: Quiz[]): Evaluation {
    this.questions = questions;
    const score = answers.filter((ans) => this.checkAnswer(ans)).length;
    const results = this.generateResults(answers);
    const rating = this.rating(score);
    const courseRecomendation = this.courseRecomendatiopnMap[rating];
    return { score, results, rating, courseRecomendation };
  }

  checkAnswer({ id, answer }: QuizItem): boolean {
    return !!this.questions.find(
      (question) => question.id === id && question.correctAnswer === answer,
    )?.id;
  }

  generateResults(quizItemList: QuizItem[]): Results[] {
    return quizItemList.map((quiz, idx) => {
      const reference = this.questions.find(
        (question) => question.id === quiz.id,
      );
      return {
        idx: idx + 1,
        id: quiz.id,
        question: reference!.question,
        correct: reference!.correctAnswer === quiz.answer,
        answer: quiz!.answer as string,
        correctedAnswer: reference!.correctAnswer,
      };
    });
  }

  rating(
    score: number,
    passingPercentage: number = 60,
    highPercentage: number = 80,
  ): Rating {
    if (score === 0) return Rating.Fail;
    const numQuestions = this.questions.length;
    const percentage = (score / numQuestions) * 100;
    if (percentage < passingPercentage) {
      return Rating.Low;
    } else if (percentage >= passingPercentage && percentage < highPercentage) {
      return Rating.Average;
    } else {
      return Rating.High;
    }
  }

  reset(): void {
    this.questions = [];
  }
}
