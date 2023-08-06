"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = void 0;
const readlineSync = require("readline-sync");
const index_1 = require("../src/index");
const validateYOrN_1 = require("../helpers/validateYOrN");
const getValidDate_1 = require("../helpers/getValidDate");
const validateTaskSelect_1 = require("../helpers/validateTaskSelect");
/**
 * Function to update title, note, dueDate on existing tasks
 * 1. Log existing task list
 * 2. Receive and validate selected task input
 * 3. Log existing task that was selected
 * 4. Introduce object of fields and messages to allow for looping through updates
 * 5. Nested loops ask user if they want to update, validate input if yes, store input in according task field
 * 6. Log updated task
 * 7. Redirect to promptOptions
 *
 * @param list
 * @return void
 */
const updateTask = (list) => {
    console.log(list);
    const id = (0, validateTaskSelect_1.validateTaskSelection)(list, "update");
    console.log(list[id]);
    // Array of objects to loop through title, note and dueDate updates
    const fieldsToUpdate = [
        { key: "title", message: "Please enter new title" },
        { key: "note", message: "Please enter new note" },
        {
            key: "dueDate",
            message: "Please enter new due date in format YYYY/MM/DD\n",
        },
    ];
    for (let field of fieldsToUpdate) {
        //Ask if user wanted to update the field
        const updateField = (0, validateYOrN_1.validateYOrN)(`\nWould you like to update the ${field.key}?  (Y or N)\n`);
        if (updateField === "Y") {
            //Set key string to be keyof Task
            const key = field.key;
            //Ask user to input new title/note
            if (key === "title" || key === "note") {
                let newFieldValue = readlineSync.question(`\n${field.message}\n`);
                //Store new title/note in task
                list[id][key] = newFieldValue;
            }
            //If user wanted to update dueDate, call getValidDate function
            if (key === "dueDate") {
                list[id].dueDate = (0, getValidDate_1.getValidDate)(list);
            }
        }
    }
    console.log(list[id]);
    setTimeout(() => (0, index_1.promptOptions)(), 2500);
};
exports.updateTask = updateTask;
