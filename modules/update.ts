const readlineSync = require("readline-sync");

import { Task, TaskList, promptOptions } from "../src/index";
import { validateYOrN } from "../helpers/validateYOrN";
import { getValidDate } from "../helpers/getValidDate";
import { validateTaskSelection } from "../helpers/validateTaskSelect";

/**
 * Function to update title, note, dueDate on existing tasks
 * 1. Log existing task list
 * 2. Receive and validate selected task input
 * 3. Log existing task that was selected
 * 4. Introduce object of fields and messages to allow for looping through updates
 * 5. Nested loops ask user if they want to update, validate input if yes, store input in according task field
 * 6. Log updated task
 * 7. Redirect to promptOptions
 * 
 * @param list 
 * @return void
 */

export const updateTask = (list: TaskList): void => {

  console.log(list);

  const id = validateTaskSelection(list, "update");

  console.log(list[id]);

  // Array of objects to loop through title, note and dueDate updates
  const fieldsToUpdate: { key: string; message: string }[] = [
    { key: "title", message: "Please enter new title" },
    { key: "note", message: "Please enter new note" },
    {
      key: "dueDate",
      message: "Please enter new due date in format YYYY/MM/DD\n",
    },
  ];

  for (let field of fieldsToUpdate) {

    //Ask if user wanted to update the field
    const updateField: string = validateYOrN(
      `\nWould you like to update the ${field.key}?  (Y or N)\n`
    );

    if (updateField === "Y") {
      //Set key string to be keyof Task
      const key = field.key as keyof Task;

      //Ask user to input new title/note
      if (key === "title" || key === "note") {
        let newFieldValue: string = readlineSync.question(
          `\n${field.message}\n`
        );
        //Store new title/note in task
        list[id][key] = newFieldValue;
      }

      //If user wanted to update dueDate, call getValidDate function
      if (key === "dueDate") {
        list[id].dueDate = getValidDate(list);
      }
    }
  }

  console.log(list[id]);

  setTimeout(() => promptOptions(), 2500);
};
