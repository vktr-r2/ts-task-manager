/**
 * Helper function that validates user input string for dueDate
 * 1. Set regex for date format pattern YYYY/MM/DD
 * 2. Test if regex matches date input.  Return false if not
 * 3. Parse date string into separate integers
 * 4. Check if separate integers fall into range that makes sense.  Return false if not
 * 5. Create new Date object with date, month, year integers
 * 6. Check new Date object to see if date exists.  Return false if not
 * 7. Check that date is current or future.  Return false if not
 * 8. Return true if input string passes all previous tests
 * 
 * @param dateInput string: input from user for dueDate
 * @returns boolean: true if valid date input, false otherwise
 */

export const checkValidDate = (dateInput: string): boolean => {

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