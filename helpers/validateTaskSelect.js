"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTaskSelection = void 0;
const readlineSync = require("readline-sync");
const validateTaskSelection = (list, action) => {
    const id = readlineSync.question(`\nPlease enter ID for task you would like to ${action}\n`);
    if (!list[id]) {
        console.log("Issue with input");
        return (0, exports.validateTaskSelection)(list, action);
    }
    return id;
};
exports.validateTaskSelection = validateTaskSelection;
