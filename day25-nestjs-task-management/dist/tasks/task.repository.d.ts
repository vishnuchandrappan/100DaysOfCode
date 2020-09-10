import { Repository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TasksStatus } from "./task-status.enum";
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
export declare class TaskRepository extends Repository<Task> {
    getTasks: (filterDto: GetTasksFilterDto) => Promise<Task[]>;
    createTask: (CreateTaskDto: CreateTaskDto) => Promise<Task>;
    deleteTask: (id: number) => Promise<string>;
    updateTask: (task: Task, status: TasksStatus) => Promise<Task>;
}
