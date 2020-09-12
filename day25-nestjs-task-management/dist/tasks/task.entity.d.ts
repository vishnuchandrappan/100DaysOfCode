import { BaseEntity } from "typeorm";
import { TasksStatus } from "./task-status.enum";
import { User } from '../auth/user.entity';
export declare class Task extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: TasksStatus;
    user: User;
    userId: number;
}
