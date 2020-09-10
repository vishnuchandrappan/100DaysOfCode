import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TasksStatus } from './task-status.enum';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository
  ) { }

  getTasks = async (filterDto: GetTasksFilterDto) => {
    return this.taskRepository.getTasks(filterDto);
  }

  getTaskById = async (id: number): Promise<Task> => {
    const task = await this.taskRepository.findOne(id);
    if (!task) {
      throw new NotFoundException();
    }
    return task;
  }

  createTask = async (createTaskDto: CreateTaskDto): Promise<Task> => {
    return this.taskRepository.createTask(createTaskDto);
  }

  deleteTask = async (id: number): Promise<string> => {
    return this.taskRepository.deleteTask(id);
  }

  updateTaskStatus = async (id: number, status: TasksStatus): Promise<Task> => {
    const task = await this.getTaskById(id);
    return this.taskRepository.updateTask(task, status);
  }

}
