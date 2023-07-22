"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = void 0;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
var index_1 = require("../src/index");
//Helper function that creates a new task
var createTask = function (list) {
    //Sort existing Ids into numerical array ascending order
    var taskIdsArray = Object.keys(list).map(Number);
    taskIdsArray.sort(function (a, b) { return a - b; });
    //Assign new taskId to be last element in the array + 1
    var taskId = taskIdsArray[taskIdsArray.length - 1] + 1;
    //Setup newTask object as custom Task type
    var newTask = {
        id: taskId,
        title: "",
        note: "",
        status: "Incomplete",
        dueDate: new Date(),
    };
    //setTimeout used as TEMP WORKAROUND because title being captured as option input from promptOptions function
    setTimeout(function () {
        //Ask user to input title for task
        rl.question("\nPlease provide a title\n", function (title) {
            //Set user input to be title in newTask object
            newTask.title = title;
            //Ask user to input dueDate for task
            rl.question("\nPlease provide a note\n", function (note) {
                newTask.note = note;
                rl.question("\nPlease provide a due date in the format of YYYY-MM-DD\n", function (date) {
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
