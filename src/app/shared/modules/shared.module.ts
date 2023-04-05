

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

import { MaterialModule } from './material.module';
import { MdbModule } from './mdb.module';

@NgModule({
  exports: [
    CommonModule,
    MaterialModule,
    MdbModule,
    FlexLayoutModule,
    TranslocoModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
