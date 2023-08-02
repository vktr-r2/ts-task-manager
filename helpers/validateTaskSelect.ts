const readlineSync = require("readline-sync");

import { Task, promptOptions } from "../src/index";

export const validateTaskSelection = (list: { [key: string]: Task }, action: string): string => {

  const id: string = readlineSync.question(
    `\nPlease enter ID for task you would like to ${action}\n`
  );

  if (!list[id]) {
    console.log("Issue with ID input");
    return validateTaskSelection(list, action);
  }

  return id;
}