const readlineSync = require("readline-sync");

import { Task, promptOptions } from "../src/index";
import { validateYOrN } from "../helpers/validateYOrN";
import { getValidDate } from "../helpers/getValidDate";
import { validateTaskSelection } from "../helpers/validateTaskSelect";

export const updateTask = (list: { [key: string]: Task }): void => {
  console.log(list);

  const id = validateTaskSelection(list, "update");

  console.log(list[id]);

  const fieldsToUpdate: { key: string; message: string }[] = [
    { key: "title", message: "Please enter new title\n" },
    { key: "note", message: "Please enter new note\n" },
    {
      key: "dueDate",
      message: "Please enter new due date in format YYYY/MM/DD\n",
    },
  ];

  for (let field of fieldsToUpdate) {
    const updateField: string = validateYOrN(
      `\nWould you like to update the ${field.key}?  (Y or N)\n`
    );
    if (updateField === "Y") {
      const key = field.key as keyof Task;
      if (key === "title" || key === "note") {
        let newFieldValue: string = readlineSync.question(
          `\n${field.message}\n`
        );

        list[id][key] = newFieldValue;
      }

      if (key === "dueDate") {
        list[id].dueDate = new Date(getValidDate(list));
      }
    }
  }

  console.log(list[id]);

  setTimeout(() => promptOptions(), 4000);
};