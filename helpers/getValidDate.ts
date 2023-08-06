const readlineSync = require("readline-sync");

import { TaskList } from "../src/index";

/**
 * Helper function that validates user input string for dueDate
 * 1. Set regex pattern
 * 2. Test if regex matches date input
 * 3. Parse date string into separate ints
 * 5. Create new Date object with date, month, year ints
 * 6. Check Date object to see if date exists.  
 * 7. Check that date is current or future.  
 * 8. Return Date object if input string passes all previous tests
 * 
 * @param {TaskList} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @returns {Date} date object to be stored as task dueDate
 */

export const getValidDate = (list: TaskList): Date => {

  let dateInput: string = readlineSync.question(
    "\nPlease enter a current or future due date (YYYY/MM/DD format)\n"
  );

  // Regex pattern summary: 4 digits / 2 digits / 2 digits
  const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;

  // Check for string pattern.  If falsy, return recursive call to getValidDate()
  if (!dateRegex.test(dateInput)) {
    console.log("\nIncorrect format.")
    return getValidDate(list);
  }

  // Parse date into integers parts
  const dateParts = dateInput.split("/");
  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const day = parseInt(dateParts[2], 10);

  // Create new date object.  Months are 0 indexed so month -1 used
  const date = new Date(year, month - 1, day);

  // Check validity of date integer parts.  If falsy, return recursive call to getValidDate()
  if (!(date.getFullYear()=== year && date.getMonth() + 1 === month && date.getDate() === day)) {
    console.log("\nNot a valid date")
    return getValidDate(list);
  }
  
  // Check that date has not passed.  If true, return recursive call to getValidDate()
  const today = new Date();   // new Date object "today"
  today.setHours(0,0,0,0,);   // reset "today" time to midnight
  if (date < today) {         // check if "date" obj is before "today" obj
    console.log("\nDate is in the past.")
    return getValidDate(list);
  }

  //Date is valid, return date object
  return date;
};
