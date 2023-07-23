import { rl } from "../src/index";

/**
* Function to exit readline in CLI
* @returns void
*/

export const closeTaskManager = (): void => {
  rl.close();
}