import { TodoService } from 'src/services/todoService/todo.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  isErrorVisible: boolean;
  value: string = '';

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {}

  handleChange(event) {
    this._todoService.setInputValue(event.target.value);
  }

  ngDoCheck() {
    this.isErrorVisible = this.value === '' ? true : false;
  }
}
