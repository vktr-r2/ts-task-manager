"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptOptions = exports.taskList = exports.TaskStatus = void 0;
const readlineSync = require("readline-sync");
const create_1 = require("../modules/create");
const read_1 = require("../modules/read");
const exit_1 = require("../modules/exit");
const update_1 = require("../modules/update");
const delete_1 = require("../modules/delete");
const complete_1 = require("../modules/complete");
//
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Incomplete"] = "INCOMPLETE";
    TaskStatus["Complete"] = "COMPLETE";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
//Declare taskList object to store Task objects w/ two default Task objects
exports.taskList = {
    "1": {
        id: 1,
        title: "Test",
        note: "Need to get this done ASAP",
        status: TaskStatus.Incomplete,
        dueDate: new Date("2023-07-25"),
    },
    "2": {
        id: 2,
        title: "Do Laundry",
        note: "Don't forget the detergent this time!",
        status: TaskStatus.Incomplete,
        dueDate: new Date("2023-07-15"),
    },
};
/**
 * Function presents user with main menu options, receives input, and calls appropriate module function
 * 1. Ask user to select option, and store repsonse in input string
 * 2. Validate input string using array of hard coded options, and check that input is included in array.  If not, call promptOptions recursively
 * 3. Use short circuit operator to call appropriate module function
 */
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
    //Validate input
    const availOptions = ["1", "2", "3", "4", "5", "6"];
    !availOptions.includes(input) && (0, exports.promptOptions)();
    input === "1" && (0, read_1.readTasks)(exports.taskList);
    input === "2" && (0, create_1.createTask)(exports.taskList);
    input === "3" && (0, update_1.updateTask)(exports.taskList);
    input === "4" && (0, complete_1.completeTask)(exports.taskList);
    input === "5" && (0, delete_1.deleteTask)(exports.taskList);
    input === "6" && (0, exit_1.closeTaskManager)();
};
exports.promptOptions = promptOptions;
// Entry into app
console.log(`\n ~~~ Welcome to Task Manager! ~~~`);
(0, exports.promptOptions)();
