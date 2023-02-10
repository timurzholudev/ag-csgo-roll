import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";

import * as UserActions from "./actions"
import { UserService } from "../../core/services/user.service";

@Injectable()
export class UserEffects {
  getUser$ = createEffect(() => this.action$.pipe(
    ofType(UserActions.getUser),
    mergeMap(() => {
      return this.service.getUser().pipe(
        map((resp: any) => UserActions.getUserSuccess({ user: resp.data.currentUser || undefined })),
        catchError((error => of(UserActions.getUserError({ error: error.message }))))
      )
    })
  ));

  walletUpdate$ = createEffect(() => this.action$.pipe(
    ofType(UserActions.getUserSuccess),
    mergeMap(() => {
      return this.service.walletUpdate().pipe(
        map(resp => {
          console.log("walletUpdate$")
          console.log(resp)
          console.log("walletUpdate$")
          return UserActions.walletUpdate({ data: resp })
        })
      )
    })
  ))


  constructor(
    private action$: Actions,
    private service: UserService
  ) {
  }
}
