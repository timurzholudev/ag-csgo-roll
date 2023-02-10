import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";

import { AppState } from "../../store/app.state";
import { getBoxesSelector, isBoxesLoadingSelector } from "../../store/app.selectors";
import { Observable } from "rxjs";
import { Box } from "../../store/box/model";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  isLoading$: Observable<boolean> | undefined;
  boxes$: Observable<Box[] | undefined> | undefined;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(isBoxesLoadingSelector));
    this.boxes$ = this.store.pipe(select(getBoxesSelector))
  }

}
