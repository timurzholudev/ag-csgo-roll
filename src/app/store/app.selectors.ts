import { AppState } from "./app.state";
import { createSelector } from "@ngrx/store";

const selectFeature = (state: AppState) => state;
export const getUserSelector = createSelector(selectFeature, (state) => state.user.me);
export const getUserErrorSelector = createSelector(selectFeature, (state) => state.user.error);

export const didBoxesLoaded = () => createSelector(
  selectFeature,
  (state) => state.boxes?.boxes?.length
);
export const getBoxesSelector = createSelector(
  selectFeature,
  (state) => state.boxes.boxes
);
export const isBoxesLoadingSelector = createSelector(
  selectFeature,
  (state) => state.boxes.isLoading
);
export const getBoxById = (boxId: string) => createSelector(
  selectFeature,
  (state: AppState) => state.boxes.boxes?.find(({ node }) => node.id === boxId)?.node
);
export const getOpenedBoxes = () => createSelector(
  selectFeature,
  (state: AppState) => state.boxes.openedBoxes
);
export const isBoxesOpening = () => createSelector(
  selectFeature,
  (state: AppState) => state.boxes.isOpening
);
