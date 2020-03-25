import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/services/todoService/todo.service';
import { buttonTypes } from 'src/constants/buttonTypes';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() name: string;
  @Input() type: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor(private _todoService: TodoService) {}

  handleClick() {
    this.onClick.emit();
  }

  ngOnInit(): void {}
}
