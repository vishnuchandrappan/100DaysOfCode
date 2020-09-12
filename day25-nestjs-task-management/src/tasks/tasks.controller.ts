import { Controller, Get, Post, Body, Param, Delete, Put, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/tasks-status.validation.pipe';
import { Task } from './task.entity';
import { TasksStatus } from './task-status.enum';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/user.entity';
import { GetUser } from '../auth/get-user.decorator';

/**
 * Controller works for all routes starting with tasks
 * Argument to the decorator specifies route
 */
@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private tasksService: TasksService) { }
  /** A Get request to /tasks will be handled here */
  @Get()
  index(
    @Query(ValidationPipe) filterDto: GetTasksFilterDto,
    @GetUser() user: User,
  ): Promise<Task[]> {
    return this.tasksService.getTasks(filterDto, user);
  }

  /** @Body() returns an object */
  @Post()
  @UsePipes(ValidationPipe)
  store(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: User
  ): Promise<Task> {
    console.log("User ===> ", user);
    return this.tasksService.createTask(createTaskDto, user);
  }


  @Get('/:id')
  show(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<Task> {
    return this.tasksService.getTaskById(id, user);
  }


  @Delete('/:id')
  delete(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<string> {
    return this.tasksService.deleteTask(id, user);
  }


  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', TaskStatusValidationPipe) status: TasksStatus,
    @GetUser() user: User,
  ): Promise<Task> {
    return this.tasksService.updateTaskStatus(id, status, user);
  }

}
