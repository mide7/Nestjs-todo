import { Controller, Delete, Get, Patch, Post, Body, Param } from "@nestjs/common";
import { TasksService } from "./task.service";

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Get()
    async findAll() {
        return await this.tasksService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.tasksService.findOne(id)
    }

    @Post()
    async createOne(@Body('todo') todo: string, @Body('description') description: string) {
        let newId = await this.tasksService.createOne(todo, description)
        return { id: newId }
    }

    @Patch(":id")
    async editOne(@Param('id') id: string, @Body('name') todo: string, @Body('description') description: string) {
        await this.tasksService.editOne(id, todo, description)
        return { message: 'Task updated' }
    }

    @Delete(':id')
    removeOne(@Param('id') id: string) {
        return this.tasksService.removeOne(id)
    }
}