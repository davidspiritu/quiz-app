import { inject, InjectionToken } from '@angular/core';

import { environment } from './environment';
import { APIConfig, Environment } from './environment.model';

export const ENVIRONMENT = new InjectionToken<Environment>('environment', {
  factory: () => environment,
  providedIn: 'root',
});

export const API_CONFIG = new InjectionToken<APIConfig | undefined>(
  'api-config',
  {
    factory: () => inject(ENVIRONMENT).api,
    providedIn: 'root',
  },
);
