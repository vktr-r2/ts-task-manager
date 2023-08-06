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
 * @param {TaskList} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @return {Promise} A Promise that resolves to void and then calls promptOptions.
 */
const createTask = (list) => {
    //New taskId is set to greatest current taskID + 1
    const taskIdsArray = Object.keys(list).map(Number);
    const taskId = taskIdsArray.sort((a, b) => b - a)[0] + 1;
    //Create template newTask Task object
    const newTask = {
        id: taskId,
        title: "",
        note: "",
        status: index_1.TaskStatus.Incomplete,
        dueDate: new Date(),
    };
    //Assign values to Task object keys
    newTask.title = readlineSync.question(`\nPlease provide a title\n`);
    newTask.note = readlineSync.question(`\nPlease provide a note\n`);
    newTask.dueDate = (0, getValidDate_1.getValidDate)(list);
    //Log and add newTask to existing TaskList object
    console.log(newTask);
    list[taskId] = newTask;
    setTimeout(() => (0, index_1.promptOptions)(), 2500);
};
exports.createTask = createTask;
