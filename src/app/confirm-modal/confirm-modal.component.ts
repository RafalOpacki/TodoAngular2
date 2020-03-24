import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { buttonTypes } from "src/constants/buttonTypes";

@Component({
  selector: "app-confirm-modal",
  templateUrl: "./confirm-modal.component.html",
  styleUrls: ["./confirm-modal.component.css"]
})
export class ConfirmModalComponent implements OnInit {
  @Output() handleDelete: EventEmitter<any> = new EventEmitter();
  @Output() handleToggleModal: EventEmitter<any> = new EventEmitter();
  @Input() text: string;

  delete: string = "delete";
  cancel: string = "cancel";
  primary: string = buttonTypes.primary;
  secondary: string = buttonTypes.secondary;

  constructor() {}

  handleClose() {
    this.handleToggleModal.emit();
  }

  handleClick() {
    this.handleDelete.emit();
    this.handleToggleModal.emit();
  }

  ngOnInit(): void {}
}
