import { TasksService } from "./task.service";
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(): Promise<"No tasks created yet" | import("./task.model").task[]>;
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
