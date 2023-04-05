import { KeysOf } from '../utils/generics';

export type Rating = KeysOf<typeof Rating>;
export const Rating = {
  Fail: 'fail',
  Low: 'low',
  Average: 'average',
  High: 'high',
} as const;
