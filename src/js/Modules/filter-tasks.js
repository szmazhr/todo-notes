import { menuOptions } from "./data-management";
import eventHandler from "./event-handler";
import { isToday, parseISO } from "date-fns";

eventHandler.subscribe("filter-priority-1", e => {
  const option = {priority: 1};
  eventHandler.publish("filter-tasks", option)
})
eventHandler.subscribe("filter-priority-2", e => {
  const option = {priority: 2};
  eventHandler.publish("filter-tasks", option)
})
eventHandler.subscribe("filter-priority-3", e => {
  const option = {priority: 3};
  eventHandler.publish("filter-tasks", option)
})
eventHandler.subscribe("filter-priority-none", e => {
  const option = {priority: 0};
  eventHandler.publish("filter-tasks", option)
})
eventHandler.subscribe("filter-priority-reset", e => {
  const option = {priority: 'all'};
  eventHandler.publish("filter-tasks", option)
})
eventHandler.subscribe("filter-completed", e => {
  const option = {status: true};
  eventHandler.publish("filter-tasks", option)
})
eventHandler.subscribe("filter-incomplete", e => {
  const option = {status: false};
  eventHandler.publish("filter-tasks", option)
})
eventHandler.subscribe("filter-status-reset", e => {
  const option = {status: 'all'};
  eventHandler.publish("filter-tasks", option)
})
eventHandler.subscribe("sort-by-due-dateAsc", e => {
  const option = {by: 'dueDate', direction: 'asc'};
  eventHandler.publish("sort-tasks", option)
})
eventHandler.subscribe("sort-by-due-dateDesc", e => {
  const option = {by: 'dueDate', direction: 'desc'};
  eventHandler.publish("sort-tasks", option)
})
eventHandler.subscribe("sort-by-priorityL-H", e => {
  const option = {by: 'priority', direction: 'asc'};
  eventHandler.publish("sort-tasks", option)
})
eventHandler.subscribe("sort-by-priorityH-L", e => {
  const option = {by: 'priority', direction: 'desc'};
  eventHandler.publish("sort-tasks", option)
})


eventHandler.subscribe("filter-tasks", filterOptions => {
  if(filterOptions.quickFilter !== undefined){
    menuOptions.filterOptions.quickFilter = filterOptions.quickFilter;
  }
  if(filterOptions.priority !== undefined){
    menuOptions.filterOptions.priority = filterOptions.priority;
  }
  if(filterOptions.status !== undefined){
    menuOptions.filterOptions.status = filterOptions.status;
  }

  eventHandler.publish("refresh-list");
})

eventHandler.subscribe('sort-tasks', sortOptions => {
  if(sortOptions.by){
    menuOptions.sortOptions.by = sortOptions.by;
  }
  if(sortOptions.direction){
    menuOptions.sortOptions.direction = sortOptions.direction;
  }
  
  eventHandler.publish("refresh-list");
})

function filterTask(tasks){
  const {quickFilter, priority, status} = menuOptions.filterOptions;
  let filteredTasks = tasks;

  if(quickFilter === 'today'){
    filteredTasks = tasks.filter(task => task.dueDate && isToday(parseISO(task.dueDate)));
  }else if(quickFilter === 'scheduled'){
    filteredTasks = tasks.filter(task => task.dueDate);
  }

  if(priority !== 'all'){
    filteredTasks = filteredTasks.filter(task => parseInt(task.priority) === parseInt(priority) );
  }

  if(status !== 'all'){
    filteredTasks = filteredTasks.filter(task => task.completed === status)
  }

  return filteredTasks;

}
function sortTasks(Tasks){
  const {by, direction} = menuOptions.sortOptions;
  let sortedTasks = Tasks;

  if(by === 'dueDate'){
    if(direction === 'asc'){
      sortedTasks = Tasks.sort((a, b) => parseISO(a.dueDate) - parseISO(b.dueDate));
    }else{
      sortedTasks = Tasks.sort((a, b) => parseISO(b.dueDate) - parseISO(a.dueDate));
    }
  }else if(by === 'priority'){
    if(direction === 'asc'){
      sortedTasks = Tasks.sort((a, b) => parseInt(a.priority) - parseInt(b.priority));
    }else{
      sortedTasks = Tasks.sort((a, b) => parseInt(b.priority) - parseInt(a.priority));
    }
  }

  return sortedTasks;
}

function sortAndFilterTasks(tasks){
  const filteredTasks = filterTask(tasks);
  const sortedTasks = sortTasks(filteredTasks);
  return sortedTasks;
}


export {sortAndFilterTasks}