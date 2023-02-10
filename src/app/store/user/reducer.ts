import { createReducer, on } from "@ngrx/store";

import { User } from "./model";
import * as UserActions from "./actions";

export interface UserState {
  me: User | undefined,
  error: string | undefined,
  check: string
}

export const initialState: UserState = {
  me: undefined,
  error: undefined,
  check: "OK" // TODO: Remove
}

export const reducer = createReducer(
  initialState,
  on(UserActions.getUserSuccess, (state, action) => ({ ...state, me: action.user })),
  on(UserActions.getUserError, (state, action) => ({ ...state, error: action.error })),
)
