import { lists, tasks, subtasks } from "/src/data/dummy-data.js";

class List {
  constructor(item) {
    this.id = item.id;
    this.title = item.title;
    this.icon = item.icon || 'list-ul';
    this.color = item.color;
  }
}

class Task {
  constructor(task) {
    this.id = task.id;
    this.title = task.title;
    this.parentId = task.parentId || "l-1";
    this.completed = task.completed ? true : false;
    this.priority = task.priority || 0;
    this.description = task.description;
    this.dueDate = task.dueDate || "";
  }
}

const construct = (items, constructor) => {
  items.forEach((item, i) => {
    items[i] = new constructor(item);
    i++;
  });
};

construct(tasks, Task);
construct(subtasks, Task);
construct(lists, List);

const getSubtasks = function () {
  const taskId = this.id;
  return subtasks.filter((subtask) => subtask.parentId === `t-${taskId}`);
};

const getTasks = function () {
  const listId = this.id;
  return tasks.filter((task) => task.parentId === `l-${listId}`);
};

const getList = function (id) {
  return lists.find((list) => list.id === +id);
};

const getTask = function (id) {
  const _tasks = (id.split("-")[0] === 's') ? subtasks : tasks ;
  const _id = id.match(/^([ts]-)[0-9]+$/i) ? id.split("-")[1] : id;
  return _tasks.find((task) => task.id === +_id);
};

const getParent = function () {
  const _id = this.parentId.split("-")[1];
  const parent = (this.parentId.split("-")[0] === 'l') ? lists : tasks;
  return parent.find((x) => x.id === +_id);
}

lists.forEach((list) => {
  Object.assign(list, { getTasks });
});

tasks.forEach((task) => {
  Object.assign(task, { getSubtasks, getParent });
});
subtasks.forEach((subtask) => {
  Object.assign(subtask, { getParent });
});

export { lists, subtasks, getList, getTask};
