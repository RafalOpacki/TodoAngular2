import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Todo } from 'src/interfaces/todoInterface';
import { TodoService } from 'src/services/todoService/todo.service';
import { todoStatus } from 'src/constants/todoStatus';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  isConfirmModalVisible: boolean = false;
  isEditFormVisible: boolean = false;
  isChecked: boolean;
  inputEditValue: string = '';
  confirmText: string = 'Are you sure you want to delete this item?';

  constructor(private _todoService: TodoService) {}

  handleToggleForm() {
    this.isEditFormVisible = !this.isEditFormVisible;
  }

  handleCheck() {
    this._todoService.toggleStatus(this.todo);
  }

  handleToggleModal() {
    this.isConfirmModalVisible = !this.isConfirmModalVisible;
  }

  handleDelete() {
    this._todoService.removeTodo(this.todo.id);
  }

  handleEdit() {
    this._todoService.editTodo(this.todo, this.inputEditValue);
    this.handleToggleForm();
  }

  ngOnInit(): void {
    this.isChecked = this.todo?.status === todoStatus.DONE ? true : false;
    this.inputEditValue = this.todo?.name;
  }
}
