import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizPageComponent, QuizPageResolver } from './containers';

const routes: Routes = [
  {
    path: '',
    component: QuizPageComponent,
    resolve: [QuizPageResolver],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
