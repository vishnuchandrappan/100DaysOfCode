"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const task_status_enum_1 = require("../task-status.enum");
class TaskStatusValidationPipe {
    constructor() {
        this.allowedStatuses = [
            task_status_enum_1.TasksStatus.OPEN,
            task_status_enum_1.TasksStatus.IN_PROGRESS,
            task_status_enum_1.TasksStatus.DONE
        ];
        this.isStatusValid = (status) => this.allowedStatuses.indexOf(status) !== -1;
    }
    transform(value) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`${value} is an invalid status`);
        }
        return value;
    }
}
exports.TaskStatusValidationPipe = TaskStatusValidationPipe;
//# sourceMappingURL=tasks-status.validation.pipe.js.map