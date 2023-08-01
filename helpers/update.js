"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = void 0;
const readlineSync = require("readline-sync");
const index_1 = require("../src/index");
const validateYOrN_1 = require("./validateYOrN");
const validateDate_1 = require("./validateDate");
const updateTask = (list) => {
    console.log(list);
    const id = readlineSync.question("\nPlease enter ID for task you would like to update\n");
    console.log(list[id]);
    const fieldsToUpdate = [
        { key: "title", message: "Please enter new title\n" },
        { key: "note", message: "Please enter new note\n" },
        { key: "dueDate", message: "Please enter new due date in format YYYY/MM/DD\n" },
    ];
    for (let field of fieldsToUpdate) {
        const updateField = (0, validateYOrN_1.validateYOrN)(`\nWould you like to update the ${field.key}?  (Y or N)\n`);
        if (updateField === "Y") {
            const key = field.key;
            let newFieldValue = readlineSync.question(`\n${field.message}\n`);
            if (key !== "id" && key !== "dueDate") {
                list[id][key] = newFieldValue;
            }
            else if (key === "dueDate" && (0, validateDate_1.checkValidDate)(newFieldValue)) {
                list[id][key] = new Date(newFieldValue);
            }
        }
    }
    console.log(list[id]);
    setTimeout(() => (0, index_1.promptOptions)(), 4000);
};
exports.updateTask = updateTask;
