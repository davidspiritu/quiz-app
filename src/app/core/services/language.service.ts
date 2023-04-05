import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private defaultLanguage: string;
  currentLanguage$: BehaviorSubject<string>;

  constructor(private translocoService: TranslocoService) {
    this.defaultLanguage = localStorage.getItem('language') || 'en';
    this.useLanguage(this.defaultLanguage);
    this.currentLanguage$ = new BehaviorSubject<string>(this.defaultLanguage);
    localStorage.setItem('language', this.defaultLanguage);
  }

  public useLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
  }

  public get currentLanguage(): string {
    return this.currentLanguage$.getValue();
  }

  public changeDefaultLanguage(lang: string) {
    this.currentLanguage$.next(lang);
    this.useLanguage(lang);
    localStorage.setItem('language', lang);
  }
}
