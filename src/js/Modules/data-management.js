import eventHandler from "./event-handler";
import { dummyLists, dummyTasks, dummySubtasks, settings } from "/src/data/dummy-data.js";

const lists = [];
const tasks = [];
const subtasks = [];


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

const AddNew ={
  listItem(list) {
    const newList = new List(list);
    lists.push(newList);
    Object.assign(newList, { getTasks });
    eventHandler.publish('added-list-item', newList);
    return newList;
  },
  taskItem(task) {
    const newTask = new Task(task);
    tasks.push(newTask);
    Object.assign(newTask, { getSubtasks, getParent });
    eventHandler.publish('added-task-item', newTask);
    return newTask;
  },
  subtaskItem(subtask) {
    const newSubtask = new Task(subtask);
    subtasks.push(newSubtask);
    Object.assign(newSubtask, { getParent });
    eventHandler.publish('added-subtask-item', newSubtask);
    return newSubtask;
  }

}


const construct = (items, constructor) => {
  items.forEach((item, i) => {
    constructor(item);
    i++;
  });
};

//default list
AddNew.listItem({
  id: 0,
  title: "All Tasks",
  icon: "inbox",
  color: "gray"
});

eventHandler.subscribe('ready', () => {
  construct(dummyTasks, AddNew.taskItem);
  construct(dummySubtasks, AddNew.subtaskItem);
  construct(dummyLists, AddNew.listItem);
})



export { lists, tasks, subtasks, getList, getTask, settings, AddNew };
