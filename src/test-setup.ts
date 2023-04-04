import 'jest-preset-angular/setup-jest';
import './test-global-mocks';

import { defineGlobalsInjections } from '@ngneat/spectator';

import { getTranslocoTestingModule } from './app/core';

defineGlobalsInjections({
  imports: [getTranslocoTestingModule()],
});

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
