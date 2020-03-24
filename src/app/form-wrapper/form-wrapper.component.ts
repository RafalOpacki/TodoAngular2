import { buttonTypes } from "src/constants/buttonTypes";
import { TodoService } from "src/services/todoService/todo.service";
import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from "protractor";

@Component({
  selector: "app-form-wrapper",
  templateUrl: "./form-wrapper.component.html",
  styleUrls: ["./form-wrapper.component.css"]
})
export class FormWrapperComponent implements OnInit {
  constructor(private _todoService: TodoService) {}
  primary: string = buttonTypes.primary;
  secondary: string = buttonTypes.secondary;
  addTodo: string = "add todo";
  removeAll: string = "remove all";
  isVisible: boolean = false;
  confirmText: string = "Are you sure you want to delete all todos?";

  addNewTodo() {
    this._todoService.addTodo();
  }

  deleteAllTodos() {
    this._todoService.clearAll();
  }

  handleToggleModal() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit(): void {}
}
