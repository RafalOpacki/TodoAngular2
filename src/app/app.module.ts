import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
// components
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { InputComponent } from './input/input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ButtonComponent } from './common/button/button.component';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
// services
import { TodoService } from 'src/services/todoService/todo.service';
import { LocalStorageService } from 'src/services/localStorageService/local-storage.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CloseButtonComponent } from './common/close-button/close-button.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EditButtonComponent } from './common/edit-button/edit-button.component';
import { DeleteButtonComponent } from './common/delete-button/delete-button.component';
import { SaveButtonComponent } from './common/save-button/save-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    InputComponent,
    TodoListComponent,
    ButtonComponent,
    FormWrapperComponent,
    ConfirmModalComponent,
    CloseButtonComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    SaveButtonComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    NoopAnimationsModule,
  ],
  exports: [MatIconModule],
  providers: [TodoService, LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
