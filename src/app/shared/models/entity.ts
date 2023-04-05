import { Status } from './status';

export type Entity = Status &
  Readonly<{
    id: string;
  }>;

export type BackendEntities<T = string | null | undefined | string[]> = Array<
  Record<string, T>
>;
