const readlineSync = require("readline-sync");

/**
 * Helper function that validates user has answers Y or N to pre-existing question
 * 1. Ask user question, save upperCase string in input variable
 * 2. If input is not Y or N, advise input is invalid and call return getValidInput call recursively
 * 3. If input is Y or N, return input
 * 
 * @param question string: preset questions from fieldsToUpdate[i].message
 * @returns string: user response to the question string
 */

export const validateYOrN = (question: string): string => {
  const input: string = readlineSync.question(question).toUpperCase();
  if (input !== "Y" && input !== "N") {
    console.log("Invalid input.  Please enter 'Y' or 'N'.");
    return validateYOrN(question);
  }
  return input;
};