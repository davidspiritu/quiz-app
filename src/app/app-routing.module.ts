import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'start',
    loadChildren: () =>
      import('./+start/start.module').then((m) => m.StartModule),
  },
  {
    path: 'quiz',
    loadChildren: () => import('./+quiz/quiz.module').then((m) => m.QuizModule),
  },
  {
    path: 'results',
    loadChildren: () =>
      import('./+results/results.module').then((m) => m.ResultModule),
  },
  {
    path: '**',
    redirectTo: 'start',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'disabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
