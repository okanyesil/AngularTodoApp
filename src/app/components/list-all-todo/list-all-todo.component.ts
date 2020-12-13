import {Component, OnInit, Output} from '@angular/core';
import {TodoModel} from '../../models/todo.model';
import {FirebaseServiceService} from '../../services/firebase-service.service';
import {Observable} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-list-all-todo',
  templateUrl: './list-all-todo.component.html',
  styleUrls: ['./list-all-todo.component.css']
})
export class ListAllTodoComponent implements OnInit {
  genislet = false;
  @Output()
  todo: TodoModel;
  allTodo: TodoModel[];

  constructor(private firebase: FirebaseServiceService) { }

  ngOnInit(): void {
    this.firebase.getAll().snapshotChanges().pipe(map(data => data.map(value => ({key: value.payload.key, ...value.payload.val()}))))
      .subscribe(data => this.allTodo = data);
  }
  toggle(key) {
    this.allTodo.filter(value => value.key === key).map(value => value.toogle = !value.toogle);
  }


}
