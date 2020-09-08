import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TasksStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { stat } from 'fs';

/**
 * Controller works for all routes starting with tasks
 * Argument to the decorator specifies route
 */
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }
  /** A Get request to /tasks will be handled here */
  @Get()
  index(): Task[] {
    return this.tasksService.getAllTasks();
  }

  /** @Body() returns an object */
  @Post()
  store(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  /* Without DTO
  store(
    @Body('title') title: string,
    @Body('description') description: string
  ): Task {
    return this.tasksService.createTask(title, description);
  }
  */

  @Get('/:id')
  show(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): string {
    return this.tasksService.deleteTask(id);
  }

  @Put('/:id')
  update(
    @Param('/:id') id: string,
    @Body('status') status: TasksStatus
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }

}
