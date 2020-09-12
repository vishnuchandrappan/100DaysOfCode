"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const create_task_dto_1 = require("./dto/create-task.dto");
const get_tasks_filter_dto_1 = require("./dto/get-tasks-filter.dto");
const tasks_status_validation_pipe_1 = require("./pipes/tasks-status.validation.pipe");
const task_status_enum_1 = require("./task-status.enum");
const passport_1 = require("@nestjs/passport");
const user_entity_1 = require("../auth/user.entity");
const get_user_decorator_1 = require("../auth/get-user.decorator");
let TasksController = class TasksController {
    constructor(tasksService) {
        this.tasksService = tasksService;
        this.logger = new common_1.Logger('TasksController');
    }
    index(filterDto, user) {
        this.logger.verbose(`${user.username} getting all tasks. Params ${JSON.stringify(filterDto)}`);
        return this.tasksService.getTasks(filterDto, user);
    }
    store(createTaskDto, user) {
        this.logger.verbose(`${user.username} create Task. Data ${JSON.stringify(createTaskDto)}`);
        return this.tasksService.createTask(createTaskDto, user);
    }
    show(id, user) {
        this.logger.verbose(`${user.username} get task. Task ID ${JSON.stringify(id)}`);
        return this.tasksService.getTaskById(id, user);
    }
    delete(id, user) {
        return this.tasksService.deleteTask(id, user);
    }
    update(id, status, user) {
        return this.tasksService.updateTaskStatus(id, status, user);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_tasks_filter_dto_1.GetTasksFilterDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "index", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "store", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "show", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "delete", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body('status', tasks_status_validation_pipe_1.TaskStatusValidationPipe)),
    __param(2, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "update", null);
TasksController = __decorate([
    common_1.Controller('tasks'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map