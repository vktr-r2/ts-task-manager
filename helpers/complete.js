"use strict";
// const readline = require("readline");
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeTask = void 0;
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false,
// });
const index_1 = require("../src/index");
//Helper function that completes/incompletes an existing task
const completeTask = (list) => {
    //Show user current taskList
    console.log(list);
    //ASYNC TEMP WORKAROUND
    setTimeout(() => {
        //Ask user to input id for task to be completed/incompleted
        index_1.rl.question(`\nPlease select which task you'd like to mark as completed/incompleted\n`, (id) => {
            //Terniery to swap current status to completed/incompleted
            list[id].status === "Incomplete"
                ? (list[id].status = "Complete")
                : (list[id].status = "Incomplete");
            (0, index_1.promptOptions)();
        });
    }),
        1; //ASYNC TEMP WORKAROUND
};
exports.completeTask = completeTask;
