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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const task_repository_1 = require("./task.repository");
const typeorm_1 = require("@nestjs/typeorm");
let TasksService = class TasksService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
        this.getTasks = async (filterDto, user) => {
            return this.taskRepository.getTasks(filterDto, user);
        };
        this.getTaskById = async (id, user) => {
            const task = await this.taskRepository.findOne({
                where: {
                    id,
                    userId: user.id
                }
            });
            if (!task) {
                throw new common_1.NotFoundException();
            }
            return task;
        };
        this.createTask = async (createTaskDto, user) => {
            return this.taskRepository.createTask(createTaskDto, user);
        };
        this.deleteTask = async (id, user) => {
            return this.taskRepository.deleteTask(id, user);
        };
        this.updateTaskStatus = async (id, status, user) => {
            const task = await this.getTaskById(id, user);
            return this.taskRepository.updateTask(task, status);
        };
    }
};
TasksService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(task_repository_1.TaskRepository)),
    __metadata("design:paramtypes", [task_repository_1.TaskRepository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map