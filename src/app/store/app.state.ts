import { UserState } from "./user/reducer";
import { BoxesState } from "./box/reducer";

export interface AppState {
  user: UserState,
  boxes: BoxesState
}
