import { Repository, EntityRepository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TasksStatus } from "./task-status.enum";
import { NotFoundException } from '@nestjs/common';
import { async } from 'rxjs';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

  createTask = async (CreateTaskDto: CreateTaskDto): Promise<Task> => {
    const { title, description } = CreateTaskDto;

    const task = new Task();
    task.title = title;
    task.description = description;
    task.status = TasksStatus.OPEN;
    await task.save();

    return task;
  }

  deleteTask = async (id: number): Promise<string> => {
    const { affected } = await Task.delete(id);
    if (affected === 0) {
      throw new NotFoundException();
    }
    return "Deleted Successfully";
  }

  // updateTask = async (id: number, status: TasksStatus): Promise<Task> => {
  //   return
  // }

}