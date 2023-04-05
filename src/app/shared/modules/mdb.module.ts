import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';

import { NgModule } from '@angular/core';

@NgModule({
  exports: [MdbTabsModule, MdbDropdownModule],
})
export class MdbModule {}
