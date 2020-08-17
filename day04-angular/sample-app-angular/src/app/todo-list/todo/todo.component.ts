import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo: {
    id: number,
    title: string,
    completed: boolean
  };

  @Output() todoCompleted = new EventEmitter<number>();
  @Output() todoDeleted = new EventEmitter<number>();

  constructor() { }

  onTodoToggle(): void {
    this.todoCompleted.emit(this.todo.id);
  }

  handleDelete(id: number): void {
    this.todoDeleted.emit(id);
  }

}
