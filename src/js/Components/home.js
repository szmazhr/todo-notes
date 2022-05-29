import DOM from "../Modules/domStuff";
import { createMainHeader } from "./main-header";
import { createTask } from "./task-card";

const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "This is a task",
    parent: "l-1",
    dueDate: "2020-01-01",
    subtask: [1, 2],
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is a task",
    parent: "l-2",
    dueDate: "2020-01-01",
    subtask: [],
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is a task",
    parent: "l-2",
    dueDate: "2020-01-01",
    subtask: [],
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is a task",
    parent: "l-2",
    dueDate: "2020-01-01",
    subtask: [],
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is a task",
    parent: "l-3",
    dueDate: "2020-01-01",
    subtask: [3],
  },
];


function createHome() {
  const [container, header, main] = DOM.createElementsByClassName(
    ["body"],
    ["header", "header"],
    ["main-content", "main"]
  );

    tasks.forEach(task => {
      const _task = createTask(task);
      main.append(_task);
    });
    const headerContent = createMainHeader();
    // const mainContent = createMainContent();

  
  DOM.bulkAppend(container, [header, [headerContent]], [main]);
  return container;
}

export { createHome };