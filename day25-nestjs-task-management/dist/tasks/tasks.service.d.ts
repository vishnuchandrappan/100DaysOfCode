import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksService {
    private tasks;
    getAllTasks: () => Task[];
    createTask: (createTaskDto: CreateTaskDto) => Task;
}
