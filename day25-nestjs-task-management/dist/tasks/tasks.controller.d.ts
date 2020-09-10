import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
import { TasksStatus } from './task-status.enum';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    index(filterDto: GetTasksFilterDto): Promise<Task[]>;
    store(createTaskDto: CreateTaskDto): Promise<Task>;
    show(id: number): Promise<Task>;
    delete(id: number): Promise<string>;
    update(id: number, status: TasksStatus): Promise<Task>;
}
