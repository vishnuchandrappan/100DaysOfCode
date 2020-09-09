import { PipeTransform } from "@nestjs/common";
import { TasksStatus } from "../task-status.enum";
export declare class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses: TasksStatus[];
    transform(value: any): any;
    private isStatusValid;
}
