import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddTodoComponent} from './add-todo/add-todo.component';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListAllTodoComponent } from './list-all-todo/list-all-todo.component';



import {NtkmeButtonModule} from '@ctrl/ngx-github-buttons';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AddTodoComponent,
    TodoDetailComponent,
    NavbarComponent,
    FooterComponent,
    ListAllTodoComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    NtkmeButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [AddTodoComponent, TodoDetailComponent, NavbarComponent, FooterComponent, ListAllTodoComponent, LoginComponent]
})
export class ComponentModule { }
