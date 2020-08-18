import { Component } from '@angular/core';
import { TodoService } from './_services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public todoList: {
    id: number,
    title: string,
    completed: boolean
  }[];

  constructor(
    private todoService: TodoService
  ) {
    this.todoList = this.todoService.getTodoList();
  }

  setTodoAsDone(id: number): void {
    this.todoService.setTodoAsDone(id);
    this.getTodoList();
  }

  getTodoList(): void {
    this.todoList = this.todoService.getTodoList();
  }

  createTodo(newTodo: {
    id: number,
    title: string,
    completed: false
  }): void {
    this.todoService.createTodo(newTodo);
    this.getTodoList();
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.getTodoList();
  }

}
