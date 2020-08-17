import { Component } from '@angular/core';

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

  constructor() {
    this.todoList = [
      {
        id: 1,
        title: 'delectus aut autem',
        completed: true
      },
      {
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false
      },
      {
        id: 3,
        title: 'fugiat veniam minus',
        completed: false
      },
    ];
  }

  setTodoAsDone(id: number): void {
    this.todoList = this.todoList.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }

  createTodo(newTodo: {
    id: number,
    title: string,
    completed: false
  }): void {
    this.todoList.push(newTodo);
  }

  deleteTodo(id: number): void {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
    console.log(this.todoList);
  }

}
