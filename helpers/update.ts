import { Task, promptOptions, rl } from "../src/index";

/**
 * Helper function that edits an existing task
 * 1. Log taskList
 * 2. Ask user intput id for task to be updated
 * 3. Ask user which values to be updated and update accordingly
 * 4. Log updated task
 * 5. Give user promptOptions once again
 * 
 * @param {Object} list of tasks. The keys are numbers, and the values are Task objects.
 * @return void
 */

//Helper function that edits an existing task
export const updateTask = (list: {[key:number]: Task}): void => {
    //Show user current taskList
    console.log(list);

    //ASYNC TEMP WORKAROUND
    setTimeout(() => {
      //Ask user to input id for task to be edited
      rl.question(
        `\nPlease select which task you'd like to edit\n`,
        (id: number) => {
          console.log(list[id]);
          rl.question(`\nUpdate title? Y or N\n`, (answer: string) => {
            if (answer === 'Y') {
              rl.question(`\nPlease enter new title\n`, (updatedTitle: string) => {
                list[id].title = updatedTitle
                promptOptions();
              })
            }
          })
          rl.question(`\nUpdate note? Y or N\n`, (answer: string) => {
            if (answer === 'Y') {
              rl.question(`\nPlease enter new note\n`, (updatedNote: string) => {
                list[id].note = updatedNote;
                promptOptions();
              })
            }
          })
        }
      );
    }),
      1; //ASYNC TEMP WORKAROUND
}