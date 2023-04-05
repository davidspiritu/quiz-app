import { RouterTestingModule } from '@angular/router/testing';
import {
  byTestId,
  createRoutingFactory,
  SpectatorRouting,
} from '@ngneat/spectator/jest';

import { AppComponent } from './app.component';
import { HeaderModule } from './header';
import { SharedModule } from './shared';

describe('App Component', () => {
  let spectator: SpectatorRouting<AppComponent>;

  const createComponent = createRoutingFactory({
    component: AppComponent,
    imports: [RouterTestingModule, HeaderModule, SharedModule],
    stubsEnabled: false,
    routes: [],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
    expect(spectator.query(byTestId('header'))).toBeVisible();
    expect(spectator.query(byTestId('outlet'))).toBeVisible();
  });
});
