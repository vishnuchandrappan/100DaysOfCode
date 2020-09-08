import { Injectable } from '@nestjs/common';
import { Task, TasksStatus } from './tasks.model';
import * as uuid from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks = (): Task[] => this.tasks;

  getTaskById = (id: string): Task => this.tasks.find(
    task => task.id === id
  );

  createTask = (createTaskDto: CreateTaskDto): Task => {
    const task: Task = {
      id: uuid.v4(),
      status: TasksStatus.OPEN,
      ...createTaskDto,
    }

    this.tasks.push(task);
    return task;
  }

  deleteTask = (id: string): string => {
    const length = this.tasks.length;
    this.tasks = this.tasks.filter(task => task.id !== id);
    return length === this.tasks.length ?
      "404 not found" :
      "Deleted Successfully";
  }

  updateTaskStatus = (id: string, status: TasksStatus) : Task=> {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

}
