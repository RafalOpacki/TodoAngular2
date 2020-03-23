import { Component, OnInit, Input } from "@angular/core";
import { ToggleService } from "src/services/toggleService/toggle.service";
import { Todo } from "src/interfaces/todoInterface";
import { TodoService } from "src/services/todoService/todo.service";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  isVisible: boolean = this._toggleService.status;

  constructor(
    private _todoService: TodoService,
    private _toggleService: ToggleService
  ) {}

  handleCheck() {
    this._todoService.toggleStatus(this.todo);
  }

  ngDoCheck() {
    this.isVisible = this._toggleService.status;
  }

  handleOpenModal() {
    this._toggleService.toggleStatus();
  }

  openConfirmModal() {
    this.handleOpenModal();
  }

  handleDelete() {
    this._todoService.removeTodo(this.todo.id);
  }

  ngOnInit(): void {}
}
