import { ActionReducerMap } from '@ngrx/store';
import { reducer as userReducer } from "./user/reducer";
import { reducer as BoxReducer } from "./box/reducer";
import { AppState } from "./app.state";

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  boxes: BoxReducer
}
