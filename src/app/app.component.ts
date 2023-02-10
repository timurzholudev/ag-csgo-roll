import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";

import * as UserAction from "./store/user/actions"
import { Observable } from "rxjs";
import { AppState } from "./store/user/app.state";
import { getUserSelector } from "./store/app.selectors";
import { User } from "./store/user/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ag-csgo-roll';
  user$: Observable<User | undefined> | undefined;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.user$ = this.store.pipe(select(getUserSelector))
    this.store.dispatch(UserAction.getUser());
  }
}
