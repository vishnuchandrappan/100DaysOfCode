import { Repository, EntityRepository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TasksStatus } from "./task-status.enum";
import { NotFoundException } from '@nestjs/common';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { User } from '../auth/user.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

  getTasks = async (
    filterDto: GetTasksFilterDto,
    user: User,
  ): Promise<Task[]> => {
    const { search, status } = filterDto;
    const query = this.createQueryBuilder('task');

    query.where('task.userId = :userId', { userId: user.id })

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    if (search) {
      query.andWhere('task.title LIKE :search OR task.description LIKE :search', { search: `%${search}%` })
    }

    const tasks = await query.getMany();
    return tasks;
  }

  createTask = async (
    CreateTaskDto: CreateTaskDto,
    user: User
  ): Promise<Task> => {
    const { title, description } = CreateTaskDto;

    const task = new Task();
    task.title = title;
    task.description = description;
    task.status = TasksStatus.OPEN;
    task.user = user;
    await task.save();

    delete task.user;

    return task;
  }

  deleteTask = async (id: number, user: User): Promise<string> => {
    const { affected } = await Task.delete({
      id,
      userId: user.id
    });
    if (affected === 0) {
      throw new NotFoundException();
    }
    return "Deleted Successfully";
  }

  updateTask = async (task: Task, status: TasksStatus): Promise<Task> => {
    task.status = status;
    await task.save();
    return task;
  }

}