import { Todo } from "src/interfaces/todoInterface";
import { Component, OnInit, Input } from "@angular/core";
import { TodoService } from "src/services/todoService/todo.service";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private _todoService: TodoService) {}

  handleRemove() {
    this._todoService.removeTodo(this.todo.id);
  }

  handleCheck() {
    this._todoService.toggleStatus(this.todo);
  }

  ngOnInit(): void {}
}
