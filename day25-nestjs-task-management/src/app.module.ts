import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
@Module({

  imports: [
    TasksModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig)
  ]
})

export class AppModule { }
