"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskSchema = void 0;
const mongoose = require("mongoose");
exports.taskSchema = new mongoose.Schema({
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
//# sourceMappingURL=task.model.js.map