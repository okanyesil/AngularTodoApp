import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllTodoComponent } from './list-all-todo.component';

describe('ListAllTodoComponent', () => {
  let component: ListAllTodoComponent;
  let fixture: ComponentFixture<ListAllTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
