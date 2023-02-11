import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ag-box-thumbnail',
  templateUrl: './box-thumbnail.component.html',
  styleUrls: ['./box-thumbnail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxThumbnailComponent {

  @Input() title: string | undefined
  @Input() price: number | undefined
  @Input() imgUrl: string | undefined
  @Input() animate: boolean = false

}
