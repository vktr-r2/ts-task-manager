"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeTaskManager = void 0;
const index_1 = require("../src/index");
/**
* Function to exit readline in CLI
* @returns void
*/
const closeTaskManager = () => {
    index_1.rl.close();
};
exports.closeTaskManager = closeTaskManager;
