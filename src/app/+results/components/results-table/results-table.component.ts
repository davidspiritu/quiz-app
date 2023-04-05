import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Results } from '@quiz/app/shared';

@Component({
  selector: 'quiz-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsTableComponent {
  private _results: Results[] = [];

  @Input() set results(results: Results[]) {
    this._results = results;
  }

  get results() {
    return this._results;
  }
}
