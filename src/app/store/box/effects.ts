import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";

import * as BoxesAction from "./actions"
import { BoxesService } from "../../core/services/boxes.service";

@Injectable()
export class BoxesEffect {
  getUser$ = createEffect(() => this.action$.pipe(
    ofType(BoxesAction.getBoxes),
    mergeMap(() => {
      return this.service.getBoxes().pipe(
        map((resp: any) => BoxesAction.getBoxesSuccess({ boxes: resp.data.boxes })),
        catchError((error => of(BoxesAction.getBoxesError({ error: error.message }))))
      )
    })
  ));

  constructor(
    private action$: Actions,
    private service: BoxesService
  ) {
  }
}
