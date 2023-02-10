import { ActionReducerMap } from '@ngrx/store';
import { reducer } from "./user/reducer";
import { AppState } from "./user/app.state";

export const reducers: ActionReducerMap<AppState> = {
  user: reducer
}
