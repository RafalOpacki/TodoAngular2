import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css'],
})
export class SaveButtonComponent implements OnInit {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  handleClick() {
    this.onClick.emit();
  }

  ngOnInit(): void {}
}
