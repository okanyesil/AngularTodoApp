import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TodoPageComponent} from './pages/todo-page/todo-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {KayitOlComponent} from './components/kayit-ol/kayit-ol.component';


const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'todo', component: TodoPageComponent},
  {path: 'kayit-ol', component: KayitOlComponent},
  {path: '**', component: TodoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
