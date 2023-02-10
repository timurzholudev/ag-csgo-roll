import { createAction, props } from "@ngrx/store";

import { User } from "./model"

const PREFIX = "[User]"
const PREFIX_WALLET = "[User Wallet]"

export const getUser = createAction(`${PREFIX} Get User`);
export const getUserSuccess = createAction(
  `${PREFIX} Get User Success`,
  props<{ user: User | undefined }>()
);
export const getUserError = createAction(
  `${PREFIX} Get User Error`,
  props<{ error: string }>()
)

export const walletUpdate = createAction(
  `${PREFIX_WALLET} Wallet update`,
  props<{data: any}>()
);
