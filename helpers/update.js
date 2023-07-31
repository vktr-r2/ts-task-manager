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
const checkValidDate = (dateInput) => {
    const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
    // Check for string pattern.  IF falsy, return FALSE
    if (!dateRegex.test(dateInput)) {
        return false;
    }
    // Parse date into integers
    const dateParts = dateInput.split("/");
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);
    // Check the month/year ranges
    if (year < 1000 || year > 3000 || month <= 0 || month > 12) {
        return false;
    }
    const date = new Date(year, month - 1, day);
    // Check validity of date integers
    if (!(date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === day)) {
        return false;
    }
    // Check that date has not passed
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
        return false;
    }
    //Date is valid
    return true;
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
            if (key !== "id" && key !== "dueDate") {
                list[id][key] = newFieldValue;
            }
            else if (key === "dueDate" && checkValidDate(newFieldValue)) {
                list[id][key] = new Date(newFieldValue);
            }
        }
    }
    console.log(list[id]);
    setTimeout(() => (0, index_1.promptOptions)(), 4000);
};
exports.updateTask = updateTask;
