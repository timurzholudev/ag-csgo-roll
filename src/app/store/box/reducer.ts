import { createReducer, on } from "@ngrx/store";

import { Box, PageInfo } from "./model";
import * as BoxActions from "./actions";

export interface BoxesState {
  boxes: Box[] | undefined,
  pageInfo: PageInfo | undefined,
  error: string | undefined,
  isLoading: boolean
}

export const initialState: BoxesState = {
  boxes: undefined,
  pageInfo: undefined,
  error: undefined,
  isLoading: false
}

export const reducer = createReducer(
  initialState,
  on(BoxActions.getBoxes, (state) => ({ ...state, isLoading: true })),
  on(BoxActions.getBoxesSuccess, (state, action) => ({
    ...state,
    boxes: action.boxes.edges,
    pageInfo: action.boxes.pageInfo,
    isLoading: false
  })),
  on(BoxActions.getBoxesError, (state, action) => ({ ...state, error: action.error })),
)
