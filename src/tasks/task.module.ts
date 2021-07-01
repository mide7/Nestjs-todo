import { taskSchema } from "./task.model";
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { TasksController } from "./task.controller";
import { TasksService } from "./task.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Task', schema: taskSchema }])],
    controllers: [TasksController],
    providers: [TasksService],
})

export class TaskModule { }