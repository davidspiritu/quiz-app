import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultsPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: ResultsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultRoutingModule {}
