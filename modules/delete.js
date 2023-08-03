"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = void 0;
const index_1 = require("../src/index");
const validateTaskSelect_1 = require("./validateTaskSelect");
/**
 * Function to deletes an existing task and then return user to promptOptions
 * 1. Show list of current tasks
 * 2. Ask user which Id should be deleted
 * 3. Delete corresponding Task object from taskList
 * 4. Prompt user with promptOptions again
 *
 * @param {Object} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @return {Promise} A Promise that resolves to void and then calls promptOptions.
 */
//Helper function that deletes an existing task
const deleteTask = (list) => {
    console.log(list);
    const id = (0, validateTaskSelect_1.validateTaskSelection)(list, "delete");
    delete list[id];
    setTimeout(index_1.promptOptions, 0);
};
exports.deleteTask = deleteTask;
