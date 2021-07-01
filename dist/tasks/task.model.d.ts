import * as mongoose from 'mongoose';
export interface task extends mongoose.Document {
    id: string;
    todo: string;
    description: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
}
export declare const taskSchema: mongoose.Schema<task, mongoose.Model<any, any, any>, undefined, any>;
