import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BoxNode } from "../../../../store/box/model";

@Component({
  selector: 'ag-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent {

  @Input() box: BoxNode | undefined;

}
