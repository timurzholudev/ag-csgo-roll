import { AppState } from "./app.state";
import { createSelector } from "@ngrx/store";

const selectFeature = (state: AppState) => state;
export const getUserSelector = createSelector(selectFeature, (state) => state.user.me);
export const getUserErrorSelector = createSelector(selectFeature, (state) => state.user.error);


export const getBoxesSelector = createSelector(
  selectFeature,
  (state) => state.boxes.boxes
);
export const isBoxesLoadingSelector = createSelector(
  selectFeature,
  (state) => state.boxes.isLoading
)
