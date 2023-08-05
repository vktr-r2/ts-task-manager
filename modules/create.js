"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = void 0;
const readlineSync = require("readline-sync");
const index_1 = require("../src/index");
const getValidDate_1 = require("../helpers/getValidDate");
/**
 * Helper function that creates a new task
 * 1. Determine what next taskId should be using Object.keys, then .sort.
 * 2. Create empty newTask Task object
 * 3. Accept user input values and assign to appropriate newTask keys
 * 4. Log newTask and add to taskList object
 * 5. Prompt user with promptOptions again
 *
 * @param {Object} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @return {Promise} A Promise that resolves to void and then calls promptOptions.
 */
const createTask = (list) => {
    //New taskId is set to greatest current taskID + 1
    const taskIdsArray = Object.keys(list).map(Number);
    taskIdsArray.sort((a, b) => a - b);
    const taskId = taskIdsArray[taskIdsArray.length - 1] + 1;
    //Create template newTask Task object
    const newTask = {
        id: taskId,
        title: "",
        note: "",
        status: "Incomplete",
        dueDate: new Date(),
    };
    //
    newTask.title = readlineSync.question(`\nPlease provide a title\n`);
    newTask.note = readlineSync.question(`\nPlease provide a note\n`);
    newTask.dueDate = (0, getValidDate_1.getValidDate)(list);
    console.log(newTask);
    list[taskId] = newTask;
    (0, index_1.promptOptions)();
};
exports.createTask = createTask;
