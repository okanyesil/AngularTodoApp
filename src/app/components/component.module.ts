import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddTodoComponent} from './add-todo/add-todo.component';
import {DeleteTodoComponent} from './delete-todo/delete-todo.component';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AddTodoComponent,
    DeleteTodoComponent,
    TodoDetailComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AddTodoComponent, DeleteTodoComponent, TodoDetailComponent, NavbarComponent, FooterComponent]
})
export class ComponentModule { }
