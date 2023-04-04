import { RouterTestingModule } from '@angular/router/testing';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { AppComponent } from './app.component';

describe('App Component', () => {
  let spectator: SpectatorRouting<AppComponent>;

  const createComponent = createRoutingFactory({
    component: AppComponent,
    imports: [RouterTestingModule],
    stubsEnabled: false,
    routes: [],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });
});
