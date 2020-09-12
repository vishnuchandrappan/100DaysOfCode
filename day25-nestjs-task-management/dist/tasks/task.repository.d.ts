import { Repository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TasksStatus } from "./task-status.enum";
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { User } from '../auth/user.entity';
export declare class TaskRepository extends Repository<Task> {
    getTasks: (filterDto: GetTasksFilterDto, user: User) => Promise<Task[]>;
    createTask: (CreateTaskDto: CreateTaskDto, user: User) => Promise<Task>;
    deleteTask: (id: number, user: User) => Promise<string>;
    updateTask: (task: Task, status: TasksStatus) => Promise<Task>;
}
