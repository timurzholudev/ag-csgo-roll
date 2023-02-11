import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { distinctUntilChanged, filter, merge, Observable, of, Subscription, switchMap, withLatestFrom } from "rxjs";
import { tap } from "rxjs/operators"
import { EMPTY_SUBSCRIPTION } from "rxjs/internal/Subscription";

import { AppState } from "../../store/app.state";
import { BoxNode, BoxOpening } from "../../store/box/model";
import { didBoxesLoaded, getBoxById, getOpenedBoxes, isBoxesOpening } from "../../store/app.selectors";
import * as BoxesAction from "../../store/box/actions";

@Component({
  selector: "ag-box",
  templateUrl: "./box.component.html",
  styleUrls: [ "./box.component.scss" ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements OnInit, OnDestroy {

  box: BoxNode | undefined;
  toggleBoxOpeningDialog = false;
  errorMessage: string | undefined;

  isBoxesOpening$: Observable<boolean> = of(false);
  openedBoxes$: Observable<BoxOpening[] | undefined> | undefined;

  private data$$: Subscription = EMPTY_SUBSCRIPTION;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private changeDetector: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.openedBoxes$ = this.store.pipe(select(getOpenedBoxes()));
    this.isBoxesOpening$ = this.store.pipe(select(isBoxesOpening()))

    const getBox$ = this.store.pipe(select(didBoxesLoaded())).pipe(
      distinctUntilChanged(),
      filter(resp => !!resp),
      withLatestFrom(this.route.params),
      switchMap(([ , params ]) => {
        return this.store.pipe(select(getBoxById(params["id"]))).pipe(
            tap(box => {
              if(!box) {
                this.router.navigate(['/404']);
                return
              }
              this.box = box
            })
          )
      })
    )

    this.data$$ = merge(
      getBox$
    ).subscribe(() => this.changeDetector.markForCheck())
  }

  ngOnDestroy() {
    this.data$$?.unsubscribe();
  }

  purchaseBox() {
    if (!this.box) {
      this.errorMessage = "Oops, looks like we lost box..."
      return;
    }

    this.toggleBoxOpeningDialog = true;
    this.store.dispatch(BoxesAction.openBox({
      openBoxInput: {
        boxId: this.box.id,
        amount: 1
      }
    }))
  }

  closeBoxOpeningDialog() {
    this.toggleBoxOpeningDialog = false;
    this.store.dispatch(BoxesAction.clearOpenBox())
  }

}
