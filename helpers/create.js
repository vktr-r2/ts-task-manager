"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = void 0;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
const index_1 = require("../src/index");
/**
 * 1 - Determine what next taskId should be using Object.keys and .sort
 * 2 - Create empty newTask Task object
 * 3 - Accept user input values and assign to appropriate newTask keys
 * 4 - Add newTask to taskList object
 *
 * * @param {Object} list The tasks to be read. The keys are numbers, and the values are Task objects.
 */
//Helper function that creates a new task
const createTask = (list) => {
    //Sort existing Ids into numerical array ascending order
    const taskIdsArray = Object.keys(list).map(Number);
    taskIdsArray.sort((a, b) => a - b);
    //Assign new taskId to be last element in the array + 1
    const taskId = taskIdsArray[taskIdsArray.length - 1] + 1;
    //Setup newTask object as custom Task type
    const newTask = {
        id: taskId,
        title: "",
        note: "",
        status: "Incomplete",
        dueDate: new Date(),
    };
    //setTimeout used as TEMP WORKAROUND because title being captured as option input from promptOptions function
    setTimeout(() => {
        //Ask user to input title for task
        rl.question(`\nPlease provide a title\n`, (title) => {
            //Set user input to be title in newTask object
            newTask.title = title;
            //Ask user to input dueDate for task
            rl.question(`\nPlease provide a note\n`, (note) => {
                newTask.note = note;
                rl.question(`\nPlease provide a due date in the format of YYYY-MM-DD\n`, (date) => {
                    //Set user input to be dueDate in newTask object
                    newTask.dueDate = new Date(date);
                    //Show user the task they've created
                    console.log(newTask);
                    //Push newTask object to taskList array
                    list[taskId] = newTask;
                    // Loop user back to Task Manager prompt
                    (0, index_1.promptOptions)();
                });
            });
        });
    }),
        1; //setTimeout length for TEMP WORKAROUND
};
exports.createTask = createTask;
