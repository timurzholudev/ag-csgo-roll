import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "ag-button",
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text = "Ok"
  @Input() color: "default" | "primary" | "secondary" | "ternary" = "default"
  @Input() withIcon = false
  @Output() clicked = new EventEmitter<void>();

  buttonClick() {
    this.clicked.emit();
  }
}
