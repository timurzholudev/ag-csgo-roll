import { createAction, props } from "@ngrx/store";

import { Boxes, BoxOpening, OpenBoxInput } from "./model"

const PREFIX = "[Boxes]"

export const getBoxes = createAction(`${PREFIX} Get Boxes`);
export const getBoxesSuccess = createAction(
  `${PREFIX} Get Boxes Success`,
  props<{ boxes: Boxes }>()
);
export const getBoxesError = createAction(
  `${PREFIX} Get Boxes Error`,
  props<{ error: string }>()
);

export const openBox = createAction(
  `${PREFIX} Open Boxes`,
  props<{ openBoxInput: OpenBoxInput }>()
);
export const openBoxSuccess = createAction(
  `${PREFIX} Open Boxes Success`,
  props<{ openBoxes: BoxOpening[] }>()
);
export const openBoxError = createAction(
  `${PREFIX} Open Boxes Error`,
  props<{ error: string }>()
);
export const clearOpenBox = createAction(
  `${PREFIX} Clear Open Boxes`
)
