"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = void 0;
const index_1 = require("../src/index");
const getValidDate_1 = require("./getValidDate");
/**
 * Helper function that creates a new task
 * 1. Determine what next taskId should be using Object.keys and .sort
 * 2. Create empty newTask Task object
 * 3. Accept user input values and assign to appropriate newTask keys
 * 4. Log newTask and add to taskList object
 * 5. Prompt user with promptOptions again
 *
 * @param {Object} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @return {Promise} A Promise that resolves to void and then calls promptOptions.
 */
const createTask = (list) => {
    const taskIdsArray = Object.keys(list).map(Number);
    taskIdsArray.sort((a, b) => a - b);
    const taskId = taskIdsArray[taskIdsArray.length - 1] + 1;
    const newTask = {
        id: taskId,
        title: "",
        note: "",
        status: "Incomplete",
        dueDate: new Date(),
    };
    setTimeout(() => {
        index_1.rl.question(`\nPlease provide a title\n`, (title) => {
            newTask.title = title;
            index_1.rl.question(`\nPlease provide a note\n`, (note) => {
                newTask.note = note;
                index_1.rl.question(`\nPlease provide a due date in the format of YYYY-MM-DD\n`, (date) => {
                    newTask.dueDate = (0, getValidDate_1.getValidDate)(list);
                    console.log(newTask);
                    list[taskId] = newTask;
                    (0, index_1.promptOptions)();
                });
            });
        });
    }),
        1;
};
exports.createTask = createTask;
