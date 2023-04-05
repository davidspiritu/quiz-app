export type Results = Readonly<{
  idx: number;
  id: string;
  question: string;
  correct: boolean;
  answer: string;
  correctedAnswer: string;
}>;
