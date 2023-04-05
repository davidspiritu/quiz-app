import { createState, withProps } from '@ngneat/elf';
import { withActiveId, withEntities } from '@ngneat/elf-entities';
import { Status } from '@quiz/app/shared';
import { Evaluation } from '@quiz/app/shared/models/evaluation';

import { Quiz } from '../models/quiz.models';

const name = 'Quiz';
const { state, config } = createState(
  withProps<Status & Readonly<{ evaluation?: Evaluation | null }>>({
    loaded: false,
    loading: false,
    evaluation: null,
  }),
  withEntities<Quiz>(),
  withActiveId(),
);

export const QuizStore = { state, name, config };
