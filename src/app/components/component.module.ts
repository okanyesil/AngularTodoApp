import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddTodoComponent} from './add-todo/add-todo.component';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {NtkmeButtonModule} from '@ctrl/ngx-github-buttons';
import {FormsModule} from '@angular/forms';
import { ListAllTodoComponent } from './list-all-todo/list-all-todo.component';



@NgModule({
  declarations: [
    AddTodoComponent,
    TodoDetailComponent,
    NavbarComponent,
    FooterComponent,
    ListAllTodoComponent
  ],
  imports: [
    CommonModule,
    NtkmeButtonModule,
    FormsModule
  ],
  exports: [AddTodoComponent, TodoDetailComponent, NavbarComponent, FooterComponent, ListAllTodoComponent]
})
export class ComponentModule { }
