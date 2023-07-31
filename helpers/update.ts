const readlineSync = require("readline-sync");

import { Task, promptOptions } from "../src/index";

const getValidInput = (question: string): string => {
  const input: string = readlineSync.question(question).toUpperCase();
  if (input !== "Y" && input !== "N") {
    console.log("Invalid input.  Please enter 'Y' or 'N'.");
    return getValidInput(question);
  }
  return input;
};

export const updateTask = (list: { [key: string]: Task }): void => {
  console.log(list);

  const id: string = readlineSync.question(
    "\nPlease enter ID for task you would like to update\n"
  );
  console.log(list[id]);

  const fieldsToUpdate: { key: string; message: string }[] = [
    { key: "title", message: "Please enter new title\n" },
    { key: "note", message: "Please enter new note\n" },
    { key: "dueDate", message: "Please enter new due date\n" },
  ];

  for (let field of fieldsToUpdate) {
    const updateField: string = getValidInput(
      `\nWould you like to update the ${field.key}?  (Y or N)\n`
    );
    if (updateField === "Y") {
      const key = field.key as keyof Task;
      const newFieldValue: string = readlineSync.question(
        `\n${field.message}\n`
      );
      if (key !== "id" && key !== 'dueDate') {
        list[id][key] = newFieldValue;
      }
      else if (key === "dueDate") {
        list[id][key] = new Date(newFieldValue)
      }
    }
  }

  console.log(list[id]);

  setTimeout(() => promptOptions(), 4000);
};
