import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { ResultsPageModule } from './containers';
import { ResultRoutingModule } from './results-routing.module';

@NgModule({
  imports: [CommonModule, ResultRoutingModule, ResultsPageModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'results' }],
})
export class ResultModule {}
