import { AppState } from "./user/app.state";
import { createSelector } from "@ngrx/store";

const selectFeature = (state: AppState) => state;
export const getUserSelector = createSelector(selectFeature, (state) => state.user.me);
export const getCheckSelector = createSelector(selectFeature, (state) => state.user.check);
export const getUserErrorSelector = createSelector(selectFeature, (state) => state.user.error);
