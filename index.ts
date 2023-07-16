
//Declare custom Task type
type Task = {
  id: number;
  title: string;
  status: string;
  dueDate: Date;
}

//Declare taskList array to store Task objects
const taskList: Task[] = [
  {id: 1, title: "Test", status: "Incomplete", dueDate: new Date("2023-07-25")},
  {id: 2, title: "Do Laundry", status: "Incomplete", dueDate: new Date("2023-07-15")}
]

//
// console.log(taskList);
// console.log(taskList[1]);