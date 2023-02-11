import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { BoxOpening } from "../../../store/box/model";


@Component({
  selector: "ag-box-opening",
  templateUrl: "./box-opening.component.html",
  styleUrls: [ "./box-opening.component.scss" ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxOpeningComponent implements OnInit {

  @HostBinding("class.overlay") hostCssClass = true;

  @Input() openedBoxes: BoxOpening[] | null | undefined
  @Input() loading: boolean | null = true;
  @Output() closeDialog = new EventEmitter<void>()

  constructor() {
  }

  ngOnInit(): void {

  }

  close() {
    if(this.loading) {
      return
    }
    this.closeDialog.emit();
  }

}
