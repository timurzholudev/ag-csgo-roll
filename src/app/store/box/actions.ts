import { createAction, props } from "@ngrx/store";

import { Boxes } from "./model"

const PREFIX = "[Boxes]"

export const getBoxes = createAction(`${PREFIX} Get Boxes`);
export const getBoxesSuccess = createAction(
  `${PREFIX} Get Boxes Success`,
  props<{ boxes: Boxes}>()
);
export const  getBoxesError = createAction(
  `${PREFIX} Get Boxes Error`,
  props<{ error: string }>()
)
