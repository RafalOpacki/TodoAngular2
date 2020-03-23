import { TodoService } from "src/services/todoService/todo.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  value: string = this._todoService.inputValue;

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {}

  handleChange(event) {
    this._todoService.setInputValue(event.target.value);
  }
}
