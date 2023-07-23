import { promptOptions, Task, rl } from "../src/index";

/**
 * Helper function that creates a new task
 * 1. Determine what next taskId should be using Object.keys and .sort
 * 2. Create empty newTask Task object
 * 3. Accept user input values and assign to appropriate newTask keys
 * 4. Log newTask and add to taskList object
 * 5. Prompt user with promptOptions again
 * 
 * @param {Object} list The tasks to be read. The keys are numbers, and the values are Task objects.
 * @return {Promise} A Promise that resolves to void and then calls promptOptions.
 */

export const createTask = (list: { [key: number]: Task }): void => {

  const taskIdsArray: number[] = Object.keys(list).map(Number);
  taskIdsArray.sort((a: number, b: number) => a - b);
  const taskId: number = taskIdsArray[taskIdsArray.length - 1] + 1;

  const newTask: Task = {
    id: taskId,
    title: "",
    note: "",
    status: "Incomplete",
    dueDate: new Date(),
  };

  setTimeout(() => {
    rl.question(`\nPlease provide a title\n`, (title: string) => {
      newTask.title = title;

      rl.question(`\nPlease provide a note\n`, (note: string) => {
        newTask.note = note;

        rl.question(
          `\nPlease provide a due date in the format of YYYY-MM-DD\n`,
          (date: string) => {
            newTask.dueDate = new Date(date);
            console.log(newTask);
            list[taskId] = newTask;

            promptOptions();
          }
        );
      });
    });
  }),
    1;
};
