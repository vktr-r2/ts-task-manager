const readlineSync = require("readline-sync");

import { Task, promptOptions } from "../src/index";

export const validateTaskSelection = (list: { [key: string]: Task }): string => {

  const id: string = readlineSync.question(
    "\nPlease enter ID for task you would like to update\n"
  );

  if (!list[id]) {
    return validateTaskSelection(list);
  }

  return id;
}