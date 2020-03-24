import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/interfaces/todoInterface";
import { TodoService } from "src/services/todoService/todo.service";
import { todoStatus } from "src/constants/todoStatus";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  isVisible: boolean = false;
  isChecked: boolean;
  confirmText: string = "Are you sure you want to delete this item?";

  constructor(private _todoService: TodoService) {}

  handleCheck() {
    this._todoService.toggleStatus(this.todo);
  }

  handleToggleModal() {
    this.isVisible = !this.isVisible;
  }

  handleDelete() {
    this._todoService.removeTodo(this.todo.id);
  }

  ngOnInit(): void {
    this.isChecked = this.todo?.status === todoStatus.DONE ? true : false;
  }
}
