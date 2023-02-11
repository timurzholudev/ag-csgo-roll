import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "ag-image",
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {

  @Input() imgSrc: string | undefined;
  @Input() imgAlt = "missing image description"

}
