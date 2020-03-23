import { Component, OnInit } from "@angular/core";
import { Todo } from "src/interfaces/todoInterface";
import { TodoService } from "src/services/todoService/todo.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo>;

  constructor(private _todoService: TodoService) {}

  ngDoCheck(): void {
    this.todos = this._todoService.todos;
  }

  ngOnInit(): void {}
}
