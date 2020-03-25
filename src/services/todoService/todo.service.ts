import { Injectable } from '@angular/core';
import { v4 } from 'uuid';
import { Todo } from 'src/interfaces/todoInterface';
import { todoStatus } from 'src/constants/todoStatus';
import { LocalStorageService } from '../localStorageService/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private _localStorageService: LocalStorageService) {}

  todos: Array<Todo> =
    this._localStorageService.getFromLocalStorage('todos') || [];
  inputValue: string = '';

  setInputValue(data: string) {
    this.inputValue = data;
  }

  addTodo() {
    this.todos?.push({
      name: this.inputValue,
      id: v4(),
      status: todoStatus.NEW,
    });
    this._localStorageService.addToLocalStorage('todos', this.todos);
  }

  removeTodo(id: number) {
    this.todos = this.todos?.filter((todo) => todo.id !== id);
    this._localStorageService.addToLocalStorage('todos', this.todos);
  }

  toggleStatus(todo: Todo) {
    if (todo.status === todoStatus.NEW) {
      todo.status = todoStatus.DONE;
    } else {
      todo.status = todoStatus.NEW;
    }
    this._localStorageService.addToLocalStorage('todos', this.todos);
  }

  editTodo(data: Todo, value: string) {
    const task = this.todos.find((item) => item.id === data.id);
    task.name = value;
    this._localStorageService.addToLocalStorage('todos', this.todos);
  }

  clearAll() {
    this.todos = [];
    this._localStorageService.addToLocalStorage('todos', this.todos);
  }
}
