import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { StartPageModule } from './containers';
import { StartRoutingModule } from './start-routing.module';

@NgModule({
  imports: [CommonModule, StartRoutingModule, StartPageModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'start' }],
})
export class StartModule {}
