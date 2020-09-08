import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    index(): Task[];
    store(createTaskDto: CreateTaskDto): Task;
}
