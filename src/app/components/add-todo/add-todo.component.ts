import { Component, OnInit } from '@angular/core';
import {FirebaseServiceService} from '../../services/firebase-service.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoForm = this.fb.group({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    done: new FormControl('', Validators.required)
  });
  constructor(private firebaseService: FirebaseServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.todoForm.value);
    this.firebaseService.create(this.todoForm.value);
    this.todoForm.reset();
  }

}
