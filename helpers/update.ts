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

const checkValidDate = (dateInput: string): boolean => {

  // ^ start-of-string anchor: tells regex to start pattern match from first char
  // \d digits: checks for char 0-9
  // {4} quantified: previous character must appear this many times
  // \/\ : forward slash has special meaning so much be escaped with backslash before and after
  // $ end-of-string anchor: tells regex pattern match should end on last char
  // REGEX SUMMARY: 4 digits / 2 digits / 2 digits
  const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;

  // Check for string pattern.  IF falsy, return FALSE
  if (!dateRegex.test(dateInput)) {
    return false;
  }

  // Parse date into integers parts
  const dateParts = dateInput.split("/");
  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const day = parseInt(dateParts[2], 10);

  // Check the month/year ranges
  if (year < 1000 || year > 3000 || month <= 0 || month > 12) {
    return false;
  }

  // Create new date object.  Months are 0 indexed so JS month is always -1
  const date = new Date(year, month - 1, day);

  // Check validity of date integer parts to see if date exists (Check against Feb 30th, Nov 31st ex)
  if (!(date.getFullYear()=== year && date.getMonth() + 1 === month && date.getDate() === day)) {
    return false;
  }

  // Check that date has not passed
  const today = new Date();   // todays date object set date and time to current time
  today.setHours(0,0,0,0,);   // reset time to midnight (hours, mins, seconds, miliseconds)
  if (date < today) {         // check if date is before todays date
    return false
  }

  //Date is valid
  return true;
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
      if (key !== "id" && key !== "dueDate") {
        list[id][key] = newFieldValue;
      } else if (key === "dueDate" && checkValidDate(newFieldValue)) {
        list[id][key] = new Date(newFieldValue);
      }
    }
  }

  console.log(list[id]);

  setTimeout(() => promptOptions(), 4000);
};
