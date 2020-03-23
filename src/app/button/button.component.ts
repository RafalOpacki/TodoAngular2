import { TodoService } from "src/services/todoService/todo.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  @Input() name: string = name || "Add todo";

  constructor(private _todoService: TodoService) {}

  handleClick() {
    this._todoService.addTodo();
  }

  ngOnInit(): void {}
}
