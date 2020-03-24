import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
//components
import { AppComponent } from "./app.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { InputComponent } from "./input/input.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { ButtonComponent } from "./button/button.component";
import { FormWrapperComponent } from "./form-wrapper/form-wrapper.component";
import { ConfirmModalComponent } from "./confirm-modal/confirm-modal.component";
//services
import { TodoService } from "src/services/todoService/todo.service";
import { LocalStorageService } from "src/services/localStorageService/local-storage.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    InputComponent,
    TodoListComponent,
    ButtonComponent,
    FormWrapperComponent,
    ConfirmModalComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TodoService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
