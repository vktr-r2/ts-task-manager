"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeTask = void 0;
const index_1 = require("../src/index");
/**
 * Helper function that completes/incompletes an existing task
 * 1. Log taskList
 * 2. Ask user to input Id for task to be completed/incompleted
 * 3. Ternary oeprator to toggle value as complete/incomplete
 * 4. Prompt user with promptOptions again
 *
 * @param {Object} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @return void
*/
const completeTask = (list) => {
    console.log(list);
    setTimeout(() => {
        index_1.rl.question(`\nPlease select which task you'd like to mark as completed/incompleted\n`, (id) => {
            list[id].status === "Incomplete"
                ? (list[id].status = "Complete")
                : (list[id].status = "Incomplete");
            (0, index_1.promptOptions)();
        });
    }),
        1;
};
exports.completeTask = completeTask;
