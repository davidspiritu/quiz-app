export enum EnvironmentName {
  PRODUCTION = 'production',
  LOCAL = 'local',
}

export type APIConfig = Readonly<{
  tags?: string;
  url: string;
}>;

export type WebSocketConfig = Readonly<APIConfig>;

export type Environment = Readonly<{
  name: EnvironmentName;
  production: boolean;
  api?: APIConfig;
}>;
