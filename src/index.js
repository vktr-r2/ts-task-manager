"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptOptions = exports.taskList = void 0;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
var create_1 = require("../helpers/create");
var read_1 = require("../helpers/read");
var exit_1 = require("../helpers/exit");
var update_1 = require("../helpers/update");
var delete_1 = require("../helpers/delete");
var complete_1 = require("../helpers/complete");
//Declare taskList array to store Task objects w/ two default tasks
exports.taskList = {
    "1": {
        id: 1,
        title: "Test",
        note: "Need to get this done ASAP",
        status: "Incomplete",
        dueDate: new Date("2023-07-25"),
    },
    "2": {
        id: 2,
        title: "Do Laundry",
        note: "Don't forget the detergent this time!",
        status: "Incomplete",
        dueDate: new Date("2023-07-15"),
    },
};
var promptOptions = function () {
    //Trigger initial question for user to select option
    rl.question(" \nPlease enter one of the following options: \n\n    1 - View current tasks \n\n    2 - Add new task \n\n    3 - Edit existing task \n\n    4 - Mark task as complete/incomplete \n\n    5 - Delete task \n\n    6 - Close Task Manager \n\n    ", function (input) {
        input === "1" && (0, read_1.readTasks)(exports.taskList);
        input === "2" && (0, create_1.createTask)(exports.taskList);
        input === "3" && (0, update_1.updateTask)(exports.taskList);
        input === "4" && (0, complete_1.completeTask)(exports.taskList);
        input === "5" && (0, delete_1.deleteTask)(exports.taskList);
        input === "6" && (0, exit_1.closeTaskManager)();
    });
};
exports.promptOptions = promptOptions;
//Helper function that closes the Task Manager app in terminal
// const closeTaskManager = (): void => {
//   rl.close();
// }
console.log("\n ~~~ Welcome to Task Manager! ~~~");
(0, exports.promptOptions)();
// console.log(taskList);
// console.log(taskList[1]);
