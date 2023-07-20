"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptOptions = exports.taskList = void 0;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
const create_1 = require("./helpers/create");
const read_1 = require("./helpers/read");
const exit_1 = require("./helpers/exit");
const update_1 = require("./helpers/update");
const delete_1 = require("./helpers/delete");
const complete_1 = require("./helpers/complete");
//Declare taskList array to store Task objects w/ two default tasks
exports.taskList = {
    "1": {
        id: 1,
        title: "Test",
        status: "Incomplete",
        dueDate: new Date("2023-07-25"),
    },
    "2": {
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
        input === "2" && (0, create_1.createTask)(exports.taskList);
        input === "3" && (0, update_1.updateTask)();
        input === "4" && (0, complete_1.completeTask)();
        input === "5" && (0, delete_1.deleteTask)(exports.taskList);
        input === "6" && (0, exit_1.closeTaskManager)();
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
