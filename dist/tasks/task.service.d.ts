import { Model } from 'mongoose';
import { task } from './task.model';
export declare class TasksService {
    private taskModel;
    private tasks;
    constructor(taskModel: Model<task>);
    findAll(): Promise<task[] | "No tasks created yet">;
    findOne(id: string): Promise<{
        id: string;
        todo: string;
        description: string;
        completed: boolean;
        createdAt: string;
        updatedAt: string;
    }>;
    createOne(todo: string, description: string): Promise<string>;
    editOne(id: string, todo: string, description: string): Promise<void>;
    removeOne(id: string): Promise<{
        message: string;
    }>;
    private findTask;
}
