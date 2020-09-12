import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TasksStatus } from './task-status.enum';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { User } from '../auth/user.entity';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository
  ) { }

  getTasks = async (
    filterDto: GetTasksFilterDto,
    user: User,
  ) => {
    return this.taskRepository.getTasks(filterDto, user);
  }

  getTaskById = async (
    id: number,
    user: User
  ): Promise<Task> => {
    const task = await this.taskRepository.findOne({
      where: {
        id,
        userId: user.id
      }
    });
    if (!task) {
      throw new NotFoundException();
    }
    return task;
  }

  createTask = async (
    createTaskDto: CreateTaskDto,
    user: User
  ): Promise<Task> => {
    return this.taskRepository.createTask(createTaskDto, user);
  }

  deleteTask = async (id: number, user: User): Promise<string> => {
    return this.taskRepository.deleteTask(id, user);
  }

  updateTaskStatus = async (
    id: number,
    status: TasksStatus,
    user: User
  ): Promise<Task> => {
    const task = await this.getTaskById(id, user);
    return this.taskRepository.updateTask(task, status);
  }
}

