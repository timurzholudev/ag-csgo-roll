import { createReducer, on } from "@ngrx/store";

import { Box, BoxOpening, PageInfo } from "./model";
import * as BoxActions from "./actions";

export interface BoxesState {
  boxes: Box[] | undefined,
  openedBoxes: BoxOpening[] | undefined
  pageInfo: PageInfo | undefined,
  isLoading: boolean,
  isOpening: boolean,
  error: string | undefined,
}

export const initialState: BoxesState = {
  boxes: undefined,
  openedBoxes: undefined,
  pageInfo: undefined,
  isLoading: false,
  isOpening: false,
  error: undefined,
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
  on(BoxActions.openBox, (state) => ({ ...state, isOpening: true })),
  on(BoxActions.openBoxSuccess, (state, action) => ({ ...state, openedBoxes: action.openBoxes, isOpening: false })),
  on(BoxActions.openBoxError, (state, action) => ({ ...state, error: action.error, isOpening: false })),
  on(BoxActions.clearOpenBox, (state) => ({ ...state, openedBoxes: undefined })),
)
