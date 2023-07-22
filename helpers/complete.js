"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeTask = void 0;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
var index_1 = require("../src/index");
//Helper function that completes/incompletes an existing task
var completeTask = function (list) {
    //Show user current taskList
    console.log(list);
    //ASYNC TEMP WORKAROUND
    setTimeout(function () {
        //Ask user to input id for task to be completed/incompleted
        rl.question("\nPlease select which task you'd like to mark as completed/incompleted\n", function (id) {
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
