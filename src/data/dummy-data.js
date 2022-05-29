const lists = [
  {
    id: 1,
    title: "Default",
    icon: "",
    color: "red",
  },
  {
    id: 2,
    title: "List 1",
    icon: "",
    color: "green",
  },
  {
    id: 3,
    title: "List 2",
    icon: "",
    color: "#53a1b8",
  },
  {
    id: 4,
    title: "List 3",
    icon: "",
    color: "green",
  },
  {
    id: 5,
    title: "List 4",
    icon: "",
    color: "",
  },
  {
    id: 6,
    title: "List 5",
    icon: "",
    color: "",
  },
  {
    id: 7,
    title: "List 6",
    icon: "",
    color: "",
  },
  {
    id: 8,
    title: "List 7",
    icon: "",
    color: "",
  },
  {
    id: 9,
    title: "List 8",
    icon: "",
    color: "",
  },
];

const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "This is a task, and have very long description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    parentId: "l-1",
    dueDate: "2020-01-01",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is a task 2",
    parentId: "l-2",
    dueDate: "2020-01-01",
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is a task 3",
    parentId: "l-2",
    completed: false,
  },
  {
    id: 4,
    title: "Task 4",
    description: "This is a task 4",
    parentId: "l-1",
    dueDate: "",
  },
  {
    id: 5,
    title: "Task 5",
    description: "This is a task 5",
    parentId: "l-8",
    dueDate: "2020-01-01",
  },
];

const subtasks = [
  {
    id: 1,
    title: "Subtask 1",
    description: "This is a task 6",
    parentId: "t-1",
    dueDate: "2020-01-01",
  },
  {
    id: 2,
    title: "Subtask 2",
    description: "This is a task 7",
    parentId: "t-1",
    dueDate: "2020-01-01",
  },
  {
    id: 3,
    title: "Subtask 3",
    description: "This is a task 8",
    parentId: "t-3",
    dueDate: "2020-01-01",
  },
  {
    id: 4,
    title: "Subtask 4",
    description: "This is a task 9",
    parentId: "t-3",
    dueDate: "2020-01-01",
  },
  {
    id: 5,
    title: "Subtask 5",
    description: "This is a task 10",
    parentId: "t-1",
    dueDate: "2020-01-01",
  },
];

const settings = {
  lists: {
    id: 0,
  },
  tasks: {
    id: 0,
  },
  subtasksIdss: {
    id: 0,
  },
};

export { lists, tasks, subtasks, settings };
