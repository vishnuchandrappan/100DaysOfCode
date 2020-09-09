import { Controller, Get, Post, Body, Param, Delete, Put, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/tasks-status.validation.pipe';
import { Task } from './task.entity';

/**
 * Controller works for all routes starting with tasks
 * Argument to the decorator specifies route
 */
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }
  // /** A Get request to /tasks will be handled here */
  // @Get()
  // index(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {
  //   return Object.keys(filterDto).length > 0 ?
  //     this.tasksService.getTasksWithFilters(filterDto) :
  //     this.tasksService.getAllTasks();
  // }

  /** @Body() returns an object */
  @Post()
  @UsePipes(ValidationPipe)
  store(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }
  // /* Without DTO
  // store(
  //   @Body('title') title: string,
  //   @Body('description') description: string
  // ): Task {
  //   return this.tasksService.createTask(title, description);
  // }
  // */

  @Get('/:id')
  show(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }


  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.tasksService.deleteTask(id);
  }

  // @Put('/:id')
  // update(
  //   @Param('id', ParseIntPipe) id: string,
  //   @Body('status', TaskStatusValidationPipe) status: TasksStatus
  // ): Task {
  //   return this.tasksService.updateTaskStatus(id, status);
  // }

}
