import eventHandler from "./event-handler";
import { getData, storeData } from "./localStorageManager";
import { dummyLists, dummyTasks, dummySubtasks, settings, menuOptions } from "/src/data/dummy-data.js";

const importedLists = getData('lists') || dummyLists;
const importedTasks = getData('tasks') || dummyTasks;
const importedSettings = getData('settings') || settings;


const lists = [];
const tasks = [];
const subtasks = [];


class List {
  constructor(item) {
    this.id = (item.id === 0) ? 0 : item.id || settings.listId++;
    this.title = item.title;
    this.icon = item.icon || 'list-ul';
    this.color = item.color || 'blue';
  }
}

class Task {
  constructor(task) {
    this.id = (task.id === 0) ? 0 : task.id || settings.taskId++;
    this.title = task.title;
    this.parentId = task.parentId;
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
  const _id = id.toString().match(/^([l]-)[0-9]+$/i) ? id.split("-")[1] : id;
  return lists.find((list) => list.id === +_id);
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
    if(lists.find((x) => x.id === newList.id)) return;
    lists.push(newList);
    Object.assign(newList, { getTasks });
    eventHandler.publish('added-list-item', newList);
    eventHandler.publish('refresh-list'); //required because All task list fetches all from available lists
    eventHandler.publish('count');
    storeData('lists', lists);
    storeData('settings', settings);
    return newList;
  },
  taskItem(task) {
    const newTask = new Task(task);
    tasks.push(newTask);
    Object.assign(newTask, { getSubtasks, getParent });
    eventHandler.publish('added-task-item', newTask);
    eventHandler.publish('refresh-list');
    eventHandler.publish('count');
    storeData('tasks', tasks);
    storeData('settings', settings);
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
  construct(importedLists, AddNew.listItem);
  construct(importedTasks, AddNew.taskItem);
  if(settings.isSubtaskEnabled) {
    construct(dummySubtasks, AddNew.subtaskItem);
  }
})

export { lists, tasks, subtasks, getList, getTask, importedSettings as settings, AddNew, menuOptions };
