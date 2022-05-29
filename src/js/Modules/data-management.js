import { lists, tasks, subtasks } from "/src/data/dummy-data.js";

class List {
  constructor(item) {
    this.id = item.id;
    this.title = item.title;
    this.icon = item.icon;
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
  const listId = id || this.parentId.replace("l-", "");
  return lists.find((list) => list.id === +listId);
};

const getTask = function () {
  const taskId = this.id.replace("t-", "");
  return tasks.find((task) => task.id === +taskId);
};
lists.forEach((list) => {
  Object.assign(list, { getTasks });
});

tasks.forEach((task) => {
  Object.assign(task, { getSubtasks, getList });
});
subtasks.forEach((subtask) => {
  Object.assign(subtask, { getTask });
});

export { lists, tasks, subtasks, getList };
