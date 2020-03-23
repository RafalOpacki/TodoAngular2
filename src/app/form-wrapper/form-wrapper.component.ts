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
  buttonName: string = "add todo";
  primary: string = buttonTypes.primary;

  onClick() {
    this._todoService.addTodo();
  }

  ngOnInit(): void {}
}
