import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TasksStatus } from './task-status.enum';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getTasks: (filterDto: GetTasksFilterDto) => Promise<Task[]>;
    getTaskById: (id: number) => Promise<Task>;
    createTask: (createTaskDto: CreateTaskDto) => Promise<Task>;
    deleteTask: (id: number) => Promise<string>;
    updateTaskStatus: (id: number, status: TasksStatus) => Promise<Task>;
}
