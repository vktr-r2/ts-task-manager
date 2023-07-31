"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = void 0;
const readlineSync = require("readline-sync");
const index_1 = require("../src/index");
const getValidInput = (question) => {
    const input = readlineSync.question(question).toUpperCase();
    if (input !== "Y" && input !== "N") {
        console.log("Invalid input.  Please enter 'Y' or 'N'.");
        return getValidInput(question);
    }
    return input;
};
const updateTask = (list) => {
    console.log(list);
    const id = readlineSync.question("\nPlease enter ID for task you would like to update\n");
    console.log(list[id]);
    const fieldsToUpdate = [
        { key: "title", message: "Please enter new title\n" },
        { key: "note", message: "Please enter new note\n" },
        { key: "dueDate", message: "Please enter new due date\n" },
    ];
    for (let field of fieldsToUpdate) {
        const updateField = getValidInput(`\nWould you like to update the ${field.key}?  (Y or N)\n`);
        if (updateField === "Y") {
            const key = field.key;
            const newFieldValue = readlineSync.question(`\n${field.message}\n`);
            if (key !== "id" && key !== 'dueDate') {
                list[id][key] = newFieldValue;
            }
            else if (key === "dueDate") {
                list[id][key] = new Date(newFieldValue);
            }
        }
    }
    console.log(list[id]);
    setTimeout(() => (0, index_1.promptOptions)(), 4000);
};
exports.updateTask = updateTask;
