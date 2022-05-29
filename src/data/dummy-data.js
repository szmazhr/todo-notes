const lists = [
    {
      id: 1,
      title: "Default",
      icon: "person-workspace",
      color: "red"
    },
    {
      id: 2,
      title: "Personal",
      icon: "person",
      color: "green"
    },
    {
      id: 2,
      title: "Personal",
      icon: "person",
      color: "green"
    },
    {
      id: 2,
      title: "Personal",
      icon: "person",
      color: "green"
    },
    {
      id: 2,
      title: "Personal",
      icon: "person",
      color: "green"
    },
    {
      id: 2,
      title: "Personal",
      icon: "person",
      color: "green"
    },
    {
      id: 2,
      title: "Personal",
      icon: "person",
      color: "green"
    },
    {
      id: 2,
      title: "Personal",
      icon: "person",
      color: "green"
    },
    {
      id: 2,
      title: "Personal",
      icon: "person",
      color: "green"
    },
]

const tasks = [{
  id: 1,
  title: "Task 1",
  description: "This is a task",
  parentId: "l-1",
  dueDate: "2020-01-01",
  subtasksIds: [1, 2],
  completed: true
},
{
  id: 2,
  title: "Task 2",
  description: "This is a task",
  parentId: "l-2",
  dueDate: "2020-01-01",
  subtasksIds: [],
},
{
  id: 2,
  title: "Task 2",
  description: "This is a task",
  parentId: "l-2",
  subtasksIds: [],
  completed: true
},
{
  id: 2,
  title: "Task 2",
  description: "This is a task",
  parentId: "l-2",
  dueDate: "",
  subtasksIds: [],
},
{
  id: 3,
  title: "Task 3",
  description: "This is a task",
  parentId: "l-3",
  dueDate: "2020-01-01",
  subtasksIds: [3],
}]

const subtasks = [
  {
    id: 1,
    title: "Task 1",
    description: "This is a task",
    parentId: "t-1",
    dueDate: "2020-01-01",
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is a task",
    parentId: "t-1",
    dueDate: "2020-01-01",
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is a task",
    parentId: "t-3",
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
  }
}

export {lists, tasks, subtasks, settings}