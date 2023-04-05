import { Rating } from '../constants';
import { Course } from '../constants/course.recomendation';
import { Results } from './results.model';

export type Evaluation = Readonly<{
  score: number;
  rating: Rating;
  results: Results[];
  courseRecomendation: Course[];
}>;
