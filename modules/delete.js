"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = void 0;
const index_1 = require("../src/index");
const validateTaskSelect_1 = require("../helpers/validateTaskSelect");
/**
 * Function to deletes an existing task and then return user to promptOptions
 * 1. Show list of current tasks
 * 2. Ask user which Id should be deleted
 * 3. Delete corresponding Task object from taskList
 * 4. Prompt user with promptOptions again
 *
 * @param {TaskList} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @return void
 */
const deleteTask = (list) => {
    console.log(list);
    const id = (0, validateTaskSelect_1.validateTaskSelection)(list, "delete");
    delete list[id];
    (0, index_1.promptOptions)();
};
exports.deleteTask = deleteTask;
