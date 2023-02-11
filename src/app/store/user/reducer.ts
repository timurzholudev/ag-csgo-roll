import { createReducer, on } from "@ngrx/store";

import { User } from "./model";
import * as UserActions from "./actions";

export interface UserState {
  me: User | undefined
  error: string | undefined
}

export const initialState: UserState = {
  me: undefined,
  error: undefined,
}

export const reducer = createReducer(
  initialState,
  on(UserActions.getUserSuccess, (state, action) => ({ ...state, me: action.user })),
  on(UserActions.getUserError, (state, action) => ({ ...state, error: action.error })),
  on(UserActions.walletUpdate, (state, action) => {
    if(!state.me) {
      return {...state}
    }

    return {
      ...state,
      me: {
        ...state.me,
        wallets: state.me.wallets.map(wallet => {
          if(wallet.id === action.wallet.id) {
            return action.wallet
          }
          return wallet
        })
      }
    }
  })
)
