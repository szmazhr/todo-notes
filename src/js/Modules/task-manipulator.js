import { loadPopUp } from "../Components/pop-up";
import { loadTaskForm } from "../Components/task-form";
import { AddNew, getTask, tasks } from "./data-management";
import DOM from "./domStuff";
import eventHandler from "./event-handler";
import { storeData } from "./localStorageManager";


eventHandler.subscribe('task-status-change', task => {
  if(task.completed){
    task.completed = false;
  }else{
    task.completed = true;
  }
  eventHandler.publish('refresh-list');
  eventHandler.publish("count");
  storeData('tasks', tasks);
})


eventHandler.subscribe('delete-task', e => {
  const parent = e.target.closest('[data-id]');
  const taskId = parent.dataset.id;
  const task = getTask(taskId);
  const i = tasks.indexOf(task);
  
  if (confirm(`Are you sure you want to delete ${task.title} task? All its subtask will be deleted`) == true) {
    const CardElement = DOM.select(`.body .main-content [data-id="${taskId}"]`);
    tasks.splice(i, 1);
    CardElement.remove();
    eventHandler.publish("refresh-list");
    eventHandler.publish("count");
    storeData('tasks', tasks);
  }
})


eventHandler.subscribe('edit-task', e => {
  const parent = e.target.closest('[data-id]');
  const taskId = parent.dataset.id;
  const task = getTask(taskId);
  loadPopUp(loadTaskForm(), 'Edit Task');
  eventHandler.publish("open-pop-up");

  //setting up previous values
  const form = DOM.select('form');
  form.setAttribute('data-id', task.parentId);
  form['task-id'].value = `t-${task.id}`;
  form['title'].value = task.title;
  form['description'].value = task.description;
  form['dueDate'].value = task.dueDate;
  form['priority'].value = (task.priority) ? task.priority : "";
})

//task form management
eventHandler.subscribe("add-task", (e) => {
  loadPopUp(loadTaskForm(), 'Add new Task');
  eventHandler.publish("open-pop-up");
  const form = DOM.select('form');
  const parentId = e.target.closest('[data-id]').dataset.id;
  form.setAttribute('data-id', parentId);
});


eventHandler.subscribe('task-form-submit', event => {
  const form = DOM.select('form');
  const parentId =  form.dataset.id;
  const id = form['task-id'].value;
  const isSubtask = id.match(/^(t-)/);
  const data = {
    id: parseInt(id.replace(/^([ts]-)/, "")) || "",
    title: form['title'].value || `New ${(isSubtask) ? 'subtask' : 'task'}`,
    description: form['description'].value || '',
    dueDate: form['dueDate'].value || '',
    priority: form['priority'].value || 0,
    parentId: parentId
  }

  if (id) {
    const task = getTask(id);
    const i = tasks.indexOf(task);
    const taskCard = DOM.select(`.main-content [data-id="${id}"]`);
    tasks.splice(i, 1);
    taskCard.remove();
  }
  console.log(data)
  AddNew.taskItem(data);
  form.reset();
})
