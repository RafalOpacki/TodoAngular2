import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// components
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { InputComponent } from './input/input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ButtonComponent } from './button/button.component';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
// services
import { TodoService } from 'src/services/todoService/todo.service';
import { LocalStorageService } from 'src/services/localStorageService/local-storage.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    InputComponent,
    TodoListComponent,
    ButtonComponent,
    FormWrapperComponent,
    ConfirmModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [TodoService, LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
