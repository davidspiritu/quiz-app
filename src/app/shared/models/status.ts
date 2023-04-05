export type Status = Readonly<{
  loading?: boolean;
  loaded?: boolean;
  error?: string | null;
}>;
