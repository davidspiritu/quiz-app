import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp,
} from '@ngneat/spectator/jest';
import { Translation } from '@ngneat/transloco';

import { TranslocoHttpLoader } from './transloco-http-loader.service';

describe('TranslocoHttpLoader', () => {
  let spectator: SpectatorHttp<TranslocoHttpLoader>;
  const createService = createHttpFactory({
    service: TranslocoHttpLoader,
  });

  it('should be created', () => {
    spectator = createService();
    expect(spectator.service).toBeTruthy();
  });

  describe('getTranslation()', () => {
    const mockLang = 'en';
    const mockUrl = `/assets/i18n/${mockLang}.json`;

    it('should return translation', () => {
      spectator = createService();

      let expectedValue: Translation | null = null;
      spectator.service
        .getTranslation(mockLang)
        .subscribe((response) => (expectedValue = response));

      const mockTranslation: Translation = {
        messages: {
          title: 'title test',
          description: 'desc test',
        },
      };
      spectator.expectOne(mockUrl, HttpMethod.GET).flush(mockTranslation);
      expect(expectedValue).toEqual(mockTranslation);
    });
  });
});
