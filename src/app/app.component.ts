import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { LanguageService } from './core';

@Component({
  selector: 'quiz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected get selectedLanguage(): string {
    return this.languageService.currentLanguage;
  }

  constructor(
    private languageService: LanguageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.router.navigate(['/']);
  }

  protected changeLanguage(lang: string): void {
    this.languageService.changeDefaultLanguage(lang);
  }
}
