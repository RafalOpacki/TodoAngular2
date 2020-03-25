import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css'],
})
export class EditButtonComponent implements OnInit {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  handleClick() {
    this.onClick.emit();
  }

  ngOnInit(): void {}
}
