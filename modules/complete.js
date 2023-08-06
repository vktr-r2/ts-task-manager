"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeTask = void 0;
const index_1 = require("../src/index");
const validateTaskSelect_1 = require("../helpers/validateTaskSelect");
/**
 * Helper function that completes/incompletes an existing task
 * 1. Log taskList
 * 2. Ask user to input Id for task to be completed/incompleted
 * 3. Ternary oeprator to toggle value as complete/incomplete
 * 4. Console log updated task
 * 5. Prompt user with promptOptions again
 *
 * @param {TaskList} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @return void
 */
const completeTask = (list) => {
    console.log(list);
    const id = (0, validateTaskSelect_1.validateTaskSelection)(list, "mark complete/incomplete");
    list[id].status === index_1.TaskStatus.Incomplete
        ? (list[id].status = index_1.TaskStatus.Complete)
        : (list[id].status = index_1.TaskStatus.Incomplete);
    console.log(list[id]);
    setTimeout(() => (0, index_1.promptOptions)(), 2500);
};
exports.completeTask = completeTask;
