"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TasksService = class TasksService {
    constructor(taskModel) {
        this.taskModel = taskModel;
        this.tasks = [];
    }
    async findAll() {
        const result = await this.taskModel.find({}).exec();
        if ((result === null || result === void 0 ? void 0 : result.length) < 1) {
            return 'No tasks created yet';
        }
        else {
            return result.map((x) => ({
                id: x.id,
                todo: x.todo,
                description: x.description,
                completed: x.completed,
                createdAt: x.createdAt,
                updatedAt: x.updatedAt
            }));
        }
    }
    async findOne(id) {
        let task = await this.findTask(id);
        return ({
            id: task.id,
            todo: task.todo,
            description: task.description,
            completed: task.completed,
            createdAt: task.createdAt,
            updatedAt: task.updatedAt
        });
    }
    async createOne(todo, description) {
        const newTask = new this.taskModel({ todo, description });
        const result = await newTask.save();
        return result.id;
    }
    async editOne(id, todo, description) {
        const task = await this.findTask(id);
        if (todo) {
            task.todo = todo;
        }
        if (description) {
            task.description = description;
        }
        await task.save();
    }
    async removeOne(id) {
        let task = await this.findTask(id);
        console.log(task);
        return await { message: 'Task deleted' };
    }
    async findTask(id) {
        try {
            let task = await this.taskModel.findById(id).exec();
            return task;
        }
        catch (error) {
            throw new common_1.NotFoundException('No Task Found');
        }
    }
};
TasksService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Task')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=task.service.js.map