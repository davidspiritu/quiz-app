import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  byTestId,
  createHostFactory,
  SpectatorHost,
} from '@ngneat/spectator/jest';
import { QuizItem } from '@quiz/app/shared/models/quiz.models';

import { ChoicesFormComponent } from './choices-form.component';
import { ChoicesFormModule } from './choices-form.module';

@Component({
  selector: 'ecm-mock-host',
  template: `<ng-content></ng-content> `,
})
class MockHostComponent {
  mockControl = new FormControl<QuizItem>({} as QuizItem);
}

const selector = 'quiz-choices-form';
const mockHostTemplate = `<${selector} [formControl]="mockControl"></${selector}>`;

describe('ChoicesFormComponent', () => {
  let spectator: SpectatorHost<ChoicesFormComponent>;
  const createHost = createHostFactory({
    component: ChoicesFormComponent,
    imports: [ChoicesFormModule, ReactiveFormsModule],
    host: MockHostComponent,
    declareComponent: false,
  });

  it('should create', () => {
    spectator = createHost(mockHostTemplate);
    expect(spectator.component).toBeTruthy();
  });
  it('should set value via cva', () => {
    spectator = createHost(mockHostTemplate);
    (spectator.hostComponent as MockHostComponent).mockControl.patchValue({
      id: '123',
      answer: 'hello',
    });
    expect(spectator.component.value).toEqual({
      id: '123',
      answer: 'hello',
    });
  });

  it('should display question', () => {
    spectator = createHost(mockHostTemplate);
    (spectator.hostComponent as MockHostComponent).mockControl.patchValue({
      id: '123',
      answer: 'null',
    });
    spectator.setInput('question', 'hello world');
    expect(spectator.query(byTestId('question'))).toContainText('hello world');
  });

  it('should display radio', () => {
    const mockChoices = ['a', 'b', 'c', 'd'];
    spectator = createHost(mockHostTemplate);
    (spectator.hostComponent as MockHostComponent).mockControl.patchValue({
      id: '123',
      answer: null,
    });
    spectator.setInput('choices', mockChoices);
    const radios = spectator.queryAll(byTestId('radio'));
    radios.forEach((radio, idx) => {
      expect(radio).toContainText(mockChoices[idx]);
    });
  });
});
