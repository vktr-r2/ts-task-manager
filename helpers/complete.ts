import { promptOptions, Task, rl } from "../src/index";

/**
 * Helper function that completes/incompletes an existing task
 * 1. Log taskList
 * 2. Ask user to input Id for task to be completed/incompleted
 * 3. Ternary oeprator to toggle value as complete/incomplete
 * 4. Prompt user with promptOptions again
 * 
 * @param {Object} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @return void
*/

export const completeTask = (list: { [key: number]: Task }): void => {

  console.log(list);

  setTimeout(() => {
    rl.question(
      `\nPlease select which task you'd like to mark as completed/incompleted\n`,
      (id: number) => {

        list[id].status === "Incomplete"
          ? (list[id].status = "Complete")
          : (list[id].status = "Incomplete");
        promptOptions();
      }
    );
  }),
    1;
};
