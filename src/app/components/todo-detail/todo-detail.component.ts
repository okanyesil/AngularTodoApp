import {Component, Input, OnInit} from '@angular/core';
import {TodoModel} from '../../models/todo.model';
import {FirebaseServiceService} from '../../services/firebase-service.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  @Input()
  todo: TodoModel;
  todoForm = this.fb.group({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    done: new FormControl('', Validators.required)
  });
  closeResult = '';
  constructor(private firebaseService: FirebaseServiceService, private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  deleteTodo(key: string) {
    this.firebaseService.deleteTodo(key);
  }
  updateTodo(key: string, todo: TodoModel) {
    this.firebaseService.updateTodo(key, todo);
  }
  open2(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.deleteTodo(this.todo.key);
    });
  }

  open(content) {
    this.todoForm.setValue({title: this.todo.title, description: this.todo.description, done: this.todo.done});
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.updateTodo(this.todo.key, this.todoForm.value);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
