import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    store(createTaskDto: CreateTaskDto): Promise<Task>;
    show(id: number): Promise<Task>;
    delete(id: number): Promise<string>;
}
