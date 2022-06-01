const lists = [
  {
    id: 1,
    title: "Main tasks",
    icon: "",
    color: "red",
  },
  {
    id: 2,
    title: "Addition tasks",
    icon: "",
    color: "green",
  },
  {
    id: 3,
    title: "Just random test",
    icon: "",
    color: "#53a1b8",
  },
];

const tasks = [
  {
    id: 1,
    title: "create a todo list app",
    description: "This is a task, and have very long description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    parentId: "l-1",
    dueDate: "2022-06-01T01:28",
    priority: "1",
    completed: true,
  },
  {
    id: 2,
    title: "Subtask feature",
    description: "sometime task have subtasks so I want to add this feature too",
    parentId: "l-2",
    priority: "3",
    dueDate: "",
  },
  {
    id: 3,
    title: "setting and customization",
    description: "want to add setting and customization feature like user profile and theme clock position etc",
    parentId: "l-2",
    priority: "3",
    completed: false,
  },
  {
    id: 4,
    title: "Calender view",
    description: "This is a task 4",
    parentId: "l-2",
    priority: "3",
    dueDate: "",
  },
  {
    id: 5,
    title: "get rid of the ugly confirm dialog",
    description: "This is a task 5",
    parentId: "l-2",
    priority: "2",
    completed: false,
    dueDate: "",
  },
  {
    id: 6,
    title: "get the filter and sort working",
    description: "This is a task, and have very long description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    parentId: "l-1",
    dueDate: "2022-06-01T01:28",
    priority: "1",
    completed: true,
  },
  {
    id: 7,
    title: "Add a search feature",
    description: "This is a task, and have very long description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    parentId: "l-1",
    dueDate: "",
    priority: "3",
    completed: false,
  },
  {
    id: 8,
    title: "Notification feature on task due now",
    description: "This is a task, and have very long description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    parentId: "l-1",
    dueDate: "",
    priority: "3",
    completed: false,
  },
  {
    id: 9,
    title: "Add filter and sort indicator",
    description: "sometime task have subtasks so I want to add this feature too",
    parentId: "l-2",
    priority: "3",
    dueDate: "",
  },
  {
    id: 10,
    title: "make the data persistent",
    description: "This is a tasdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    parentId: "l-1",
    dueDate: "2022-06-01T01:28",
    priority: "1",
    completed: false,
  },
  {
    id: 11,
    title: "make the app responsive",
    description: "This is a tasdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    parentId: "l-2",
    dueDate: "",
    priority: "2",
    completed: false,
  },
];

const subtasks = [
  {
    id: 1,
    title: "Subtask 1",
    description: "This is a task 6",
    parentId: "t-1",
    priority: "1",
    dueDate: "",
  },
  {
    id: 2,
    title: "Subtask 2",
    description: "This is a task 7",
    parentId: "t-1",
    priority: "1",
    dueDate: "2020-01-01",
  },
  {
    id: 3,
    title: "Subtask 3",
    description: "This is a task 8",
    parentId: "t-3",
    priority: "1",
    dueDate: "2020-01-01",
  },
  {
    id: 4,
    title: "Subtask 4",
    description: "This is a task 9",
    parentId: "t-3",
    priority: "1",
    dueDate: "2020-01-01",
  },
  {
    id: 5,
    title: "Subtask 5",
    description: "This is a task 10",
    parentId: "t-1",
    priority: "1",
    dueDate: "2020-01-01",
  },
];

const settings = {
  listId: 101,
  taskId: 101,
  subtaskId: 101,
  clock:{
    enabled: true,
    format: 'MMM dd, hh:mm:ss',
    position: "top-center",
  },
}
const menuOptions = {
  filterOptions:{
    items : [
      {
        text: "High Priority",
        eventName: "filter-priority-1",
      },
      {
        text: "Normal Priority",
        eventName: "filter-priority-2",
      },
      {
        text: "Low Priority",
        eventName: "filter-priority-3",
      },
      {
        text: "No Priority",
        eventName: "filter-priority-none",
      },
      {
        text: "Reset Priority",
        eventName: "filter-priority-reset",
      },
      {
        text: "Completed",
        eventName: "filter-completed",
      },
      {
        text: "Incompleted",
        eventName: "filter-incomplete",
      },
      {
        text: "all",
        eventName: "filter-status-reset",
      },
    ],
    "target-id": "current-list",
    quickFilter: 'today',
    priority: 'all',
    status: false,
  },
  sortOptions:{
    by: 'dueDate',
    direction: 'asc',
    items:[
      {
        text: "Due Date (Ascending)",
        eventName: "sort-by-due-dateAsc",
      },
      {
        text: "Due Date (Descending)",
        eventName: "sort-by-due-dateDesc",
      },
      {
        text: "Priority L - H",
        eventName: "sort-by-priorityL-H",
      },
      {
        text: "Priority H - L",
        eventName: "sort-by-priorityH-L",
      },
    ],
    'target-id': 'current-list',
  },
  isSubtaskEnabled: false,
  listMenuOptions: {
    items: [
      {
        icon: "plus-lg",
        text: "Add",
        eventName: "add-list",
        'data-id': ''
      },
      {
        icon: "pencil",
        text: "Edit",
        eventName: "edit-list",
        'data-id': ''
      },
      {
        icon: "trash",
        text: "Delete",
        eventName: "delete-list",
        'data-id': ''
      }
  
    ],
    'target-id': ''
    
  }
};

export { lists as dummyLists, tasks as dummyTasks, subtasks as dummySubtasks, settings, menuOptions };
