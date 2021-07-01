import { TasksService } from "./task.service";
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(): Promise<import("./task.model").task[] | "No tasks created yet">;
    findOne(id: string): Promise<{
        id: string;
        todo: string;
        description: string;
        completed: boolean;
        createdAt: string;
        updatedAt: string;
    }>;
    createOne(todo: string, description: string): Promise<{
        id: string;
    }>;
    editOne(id: string, todo: string, description: string): Promise<{
        message: string;
    }>;
    removeOne(id: string): Promise<{
        message: string;
    }>;
}
