"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptOptions = exports.taskList = exports.rl = void 0;
const readlineSync = require("readline-sync");
const readline = require("readline");
exports.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
const create_1 = require("../modules/create");
const read_1 = require("../modules/read");
const exit_1 = require("../modules/exit");
const update_1 = require("../modules/update");
const delete_1 = require("../modules/delete");
const complete_1 = require("../modules/complete");
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
const promptOptions = () => {
    //Trigger initial question for user to select option
    const input = readlineSync.question(` \nPlease enter one of the following options: \n
    1 - View current tasks \n
    2 - Add new task \n
    3 - Edit existing task \n
    4 - Mark task as complete/incomplete \n
    5 - Delete task \n
    6 - Close Task Manager \n
    `);
    input === "1" && (0, read_1.readTasks)(exports.taskList);
    input === "2" && (0, create_1.createTask)(exports.taskList);
    input === "3" && (0, update_1.updateTask)(exports.taskList);
    input === "4" && (0, complete_1.completeTask)(exports.taskList);
    input === "5" && (0, delete_1.deleteTask)(exports.taskList);
    input === "6" && (0, exit_1.closeTaskManager)();
    input !== "1" && input !== "2" && input !== "3" && input !== "4" && input !== "5" && input !== "6" && (0, exports.promptOptions)();
};
exports.promptOptions = promptOptions;
//Helper function that closes the Task Manager app in terminal
// const closeTaskManager = (): void => {
//   rl.close();
// }
console.log(`\n ~~~ Welcome to Task Manager! ~~~`);
(0, exports.promptOptions)();
