import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'quiz-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderToolbarComponent {
  protected readonly languages = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'Filipino',
      value: 'fl',
    },
  ];
  @Input() selectedLanguage: string = this.languages[0].value;

  @Output() changeLanguage = new EventEmitter();
}
