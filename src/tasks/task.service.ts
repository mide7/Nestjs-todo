import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { task } from './task.model'

type Task = {
    id: string;
    name: string;
}

@Injectable()


export class TasksService {
    private tasks: Task[] = []

    constructor(@InjectModel('Task') private taskModel: Model<task>) {

    }

    async findAll() {
        const result = await this.taskModel.find({}).exec()
        if (result?.length < 1) {
            return 'No tasks created yet'
        } else {
            return result.map((x) => ({
                id: x.id,
                todo: x.todo,
                description: x.description,
                completed: x.completed,
                createdAt: x.createdAt,
                updatedAt: x.updatedAt

            })) as task[];
        }
    }

    async findOne(id: string) {
        let task = await this.findTask(id);
        return ({
            id: task.id,
            todo: task.todo,
            description: task.description,
            completed: task.completed,
            createdAt: task.createdAt,
            updatedAt: task.updatedAt
        })
    }

    async createOne(todo: string, description: string) {
        const newTask = new this.taskModel({ todo, description })
        const result = await newTask.save()
        return result.id as string
    }

    async editOne(id: string, todo: string, description: string) {
        const task = await this.findTask(id);
        if (todo) {
            task.todo = todo
        }
        if (description) {
            task.description = description
        }
        await task.save();
    }

    async removeOne(id: string) {
        let task = await this.findTask(id)
        console.log(task)
        return await { message: 'Task deleted' }
    }

    private async findTask(id: string): Promise<task> {
        try {
            let task = await this.taskModel.findById(id).exec()
            return task
        } catch (error) {
            throw new NotFoundException('No Task Found')
        }
    }
}
