import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {TodoModel} from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  private dbPath = '/todos';

  todosRef: AngularFireList<TodoModel> = null;
  constructor(private db: AngularFireDatabase) {
    this.todosRef = this.db.list(this.dbPath);
  }
  getAll(): AngularFireList<TodoModel> {
    return this.todosRef;
  }
  create(todo: TodoModel): any {
    return this.todosRef.push(todo);
  }
  deleteTodo(key): any {
    return this.todosRef.remove(key);
  }
  updateTodo(key, todo: TodoModel): any {
    return this.todosRef.update(key, todo);
  }
}
