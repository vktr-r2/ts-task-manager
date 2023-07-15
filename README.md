Project Title: Simple Task Manager



Description:

A simple task management system allows users to create, read, update, and delete tasks 



Project Requirements:

The user should be able to create a task with a title, description, status (pending, in progress, completed), and due date.

The user should be able to view a list of all tasks.

The user should be able to update a task’s title, description, status, and due date.

The user should be able to delete a task.



This project will make use of TypeScript interfaces and classes. Below are some basic steps to guide you:

Define a Task interface with properties: id (number), title (string), description (string), status (string), and dueDate (Date).

Create a Task class that implements the Task interface. The class should have methods to create, read, update, and delete tasks.

Use an array to store your tasks. This will act as your "database" for this simple application.

When creating a task, generate a unique ID for each task. You can do this by keeping track of the last used ID.

When updating and deleting tasks, find the task by its ID in your array.

Make sure to use TypeScript types for all your variables and function return values. This will help you catch errors during development.

Test your application by creating, reading, updating, and deleting tasks.