"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptOptions = exports.taskList = void 0;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
// import { createTask } from './helpers/create'
const read_1 = require("./helpers/read");
const exit_app_1 = require("./helpers/exit-app");
//Declare taskList array to store Task objects w/ two default tasks
exports.taskList = {
    1: {
        id: 1,
        title: "Test",
        status: "Incomplete",
        dueDate: new Date("2023-07-25"),
    },
    2: {
        id: 2,
        title: "Do Laundry",
        status: "Incomplete",
        dueDate: new Date("2023-07-15"),
    },
};
const promptOptions = () => {
    //Trigger initial question for user to select option
    rl.question(` \nPlease enter one of the following options: \n
    1 - View current tasks \n
    2 - Add new task \n
    3 - Edit existing task \n
    4 - Mark task as completed \n
    5 - Delete task \n
    6 - Close Task Manager \n
    `, (input) => {
        input === "1" && (0, read_1.readTasks)(exports.taskList);
        // input === "2" && createTask();
        input === "3" && console.log("Input is 3");
        input === "4" && console.log("Input is 4");
        input === "5" && console.log("Input is 5");
        input === "6" && (0, exit_app_1.closeTaskManager)();
    });
};
exports.promptOptions = promptOptions;
//Helper function that closes the Task Manager app in terminal
// const closeTaskManager = (): void => {
//   rl.close();
// }
console.log(`\n ~~~ Welcome to Task Manager! ~~~`);
(0, exports.promptOptions)();
// console.log(taskList);
// console.log(taskList[1]);
