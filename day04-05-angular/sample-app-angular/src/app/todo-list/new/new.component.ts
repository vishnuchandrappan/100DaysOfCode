import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {

  @Output() todoCreated = new EventEmitter<{
    id: number,
    title: string,
    completed: false
  }>();

  constructor() { }

  handleSubmit({ target }): void {
    if (target[0].value) {
      this.todoCreated.emit({
        id: Date.now(),
        title: target[0].value,
        completed: false
      });
    }
    else{
      alert('enter some todo');
    }
  }

}
