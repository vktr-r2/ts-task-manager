"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTaskSelection = void 0;
const readlineSync = require("readline-sync");
const validateTaskSelection = (list) => {
    const id = readlineSync.question("\nPlease enter ID for task you would like to update\n");
    if (!list[id]) {
        return (0, exports.validateTaskSelection)(list);
    }
    return id;
};
exports.validateTaskSelection = validateTaskSelection;
