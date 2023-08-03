"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeTask = void 0;
const index_1 = require("../src/index");
const validateTaskSelect_1 = require("./validateTaskSelect");
/**
 * Helper function that completes/incompletes an existing task
 * 1. Log taskList
 * 2. Ask user to input Id for task to be completed/incompleted
 * 3. Ternary oeprator to toggle value as complete/incomplete
 * 4. Prompt user with promptOptions again
 *
 * @param {Object} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @return void
 */
const completeTask = (list) => {
    console.log(list);
    const id = (0, validateTaskSelect_1.validateTaskSelection)(list, "mark complete/incomplete");
    list[id].status === "Incomplete"
        ? (list[id].status = "Complete")
        : (list[id].status = "Incomplete");
    console.log(list[id]);
    setTimeout(() => (0, index_1.promptOptions)(), 4000);
};
exports.completeTask = completeTask;
