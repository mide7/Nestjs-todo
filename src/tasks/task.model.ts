import * as mongoose from 'mongoose';

export interface task extends mongoose.Document {
    id: string,
    todo: string,
    description: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string
}

export const taskSchema = new mongoose.Schema<task>({
    todo: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true,
});