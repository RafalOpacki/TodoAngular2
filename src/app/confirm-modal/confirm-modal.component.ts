import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ToggleService } from "src/services/toggleService/toggle.service";
import { buttonTypes } from "src/constants/buttonTypes";

@Component({
  selector: "app-confirm-modal",
  templateUrl: "./confirm-modal.component.html",
  styleUrls: ["./confirm-modal.component.css"]
})
export class ConfirmModalComponent implements OnInit {
  @Output() handleDelete: EventEmitter<any> = new EventEmitter();
  delete: string = "delete";
  cancel: string = "cancel";

  primary: string = buttonTypes.primary;
  secondary: string = buttonTypes.secondary;

  constructor(private _toggleService: ToggleService) {}

  handleClose() {
    this._toggleService.toggleStatus();
  }

  handleClick() {
    this.handleDelete.emit();
    this._toggleService.toggleStatus();
  }

  ngOnInit(): void {}
}
