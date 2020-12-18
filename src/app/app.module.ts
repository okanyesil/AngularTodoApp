import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentModule} from './components/component.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    LoginPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
