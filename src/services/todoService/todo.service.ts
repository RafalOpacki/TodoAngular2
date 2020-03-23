import { Injectable } from "@angular/core";
import { v4 } from "uuid";
import { Todo } from "src/interfaces/todoInterface";
import { todoStatus } from "src/constants/todoStatus";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todos: Array<Todo> = [];
  inputValue: string = "";

  setInputValue(data: string) {
    this.inputValue = data;
  }

  addTodo() {
    return this.todos?.push({
      name: this.inputValue,
      id: v4(),
      status: todoStatus.NEW
    });
  }

  removeTodo(id: number) {
    this.todos = this.todos?.filter(todo => todo.id !== id);
  }

  toggleStatus(todo: Todo) {
    if (todo.status === todoStatus.NEW) {
      todo.status = todoStatus.DONE;
    } else todo.status = todoStatus.NEW;
  }

  constructor() {}
}
