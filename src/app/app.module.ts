import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
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
  imports: [BrowserModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
