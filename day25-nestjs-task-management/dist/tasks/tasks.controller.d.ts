import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
import { TasksStatus } from './task-status.enum';
import { User } from '../auth/user.entity';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    index(filterDto: GetTasksFilterDto, user: User): Promise<Task[]>;
    store(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    show(id: number, user: User): Promise<Task>;
    delete(id: number, user: User): Promise<string>;
    update(id: number, status: TasksStatus, user: User): Promise<Task>;
}
