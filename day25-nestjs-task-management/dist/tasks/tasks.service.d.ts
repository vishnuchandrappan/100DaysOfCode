import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TasksStatus } from './task-status.enum';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { User } from '../auth/user.entity';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getTasks: (filterDto: GetTasksFilterDto, user: User) => Promise<Task[]>;
    getTaskById: (id: number, user: User) => Promise<Task>;
    createTask: (createTaskDto: CreateTaskDto, user: User) => Promise<Task>;
    deleteTask: (id: number, user: User) => Promise<string>;
    updateTaskStatus: (id: number, status: TasksStatus, user: User) => Promise<Task>;
}
