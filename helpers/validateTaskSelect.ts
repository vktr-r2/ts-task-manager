const readlineSync = require("readline-sync");

import { TaskList } from "../src/index";

/**
 * Function validates that user has selected an existing task id, and if so returns the id as string
 * 1. Ask readlineSync.question using action arguement as question suffix
 * 2. Store input response in id string
 * 3. Check if list.id is falsy, if so log error and call function recursively
 * 4. Return id
 * 
 * @param {TaskList} list : The tasks to be read. The keys are numbers, and the values are Task objects.
 * @param action string : String to be used as template literal in question
 * @returns id string
 */

export const validateTaskSelection = (list: TaskList, action: string): string => {
  
  const id: string = readlineSync.question(
    `\nPlease enter ID for task you would like to ${action}\n`
  );
  
  if (!list[id]) {
    console.log("\nIssue with ID input");
    return validateTaskSelection(list, action);
  }

  return id;
}