import { Component,Input } from "@angular/core";

@Component({
  selector: "ag-image",
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {

  @Input() imgSrc: string | undefined;
  @Input() imgAlt = "missing image description"

}
