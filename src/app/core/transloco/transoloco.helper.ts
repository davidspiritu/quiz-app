import {
  TranslocoTestingModule,
  TranslocoTestingOptions,
} from '@ngneat/transloco';

export function getTranslocoTestingModule(
  options: TranslocoTestingOptions = {},
) {
  return TranslocoTestingModule.forRoot({
    langs: {},
    translocoConfig: {
      availableLangs: ['en', 'fl'],
      defaultLang: 'en',
    },
    preloadLangs: true,
    ...options,
  });
}
