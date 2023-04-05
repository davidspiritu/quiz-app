import {
  byTestId,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator/jest';

import { HeaderToolbarComponent } from './header-toolbar.component';
import { HeaderToolbarModule } from './header-toolbar.module';

describe('HeaderToolbarComponent', () => {
  let spectator: Spectator<HeaderToolbarComponent>;
  const createComponent = createComponentFactory({
    component: HeaderToolbarComponent,
    imports: [HeaderToolbarModule],
    declareComponent: false,
    providers: [],
  });
  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });

  it('should set selected selected', () => {
    spectator = createComponent();
    spectator.setInput('selectedLanguage', 'fl');
    expect(spectator.component['selectedLanguage']).toEqual('fl');
  });

  it('should emit an event when a language is selected', () => {
    spectator = createComponent();
    const changeLanguageSpy = jest.spyOn(
      spectator.component.changeLanguage,
      'emit',
    );
    spectator.click(byTestId('header-button'));
    spectator.click(byTestId('header-button-en'));
    expect(changeLanguageSpy).toHaveBeenCalled();
  });
});
