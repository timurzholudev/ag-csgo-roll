import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "img[imgFallback]"
})
export class FallbackImageDirective {
  @Input() fallbackImage: string | undefined;

  constructor(private el: ElementRef) {
  }

  @HostListener("error")
  replaceBrokenImage() {
    this.el.nativeElement.src = this.fallbackImage || "../../../assets/images/fallback.png";
  }
}
