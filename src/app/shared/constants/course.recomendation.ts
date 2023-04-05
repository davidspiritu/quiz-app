import { KeysOf } from '../utils/generics';

export type Course = KeysOf<typeof Course>;
export const Course = {
  a2: 'a2',
  b1Preliminary: 'b1Preliminary',
  b2First: 'b2First',
  b2Schools: 'b2Schools',
  c1Advance: 'c1Advance',
} as const;
