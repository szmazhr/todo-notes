import { createTask } from "../Components/task-card";
import { getTask } from "./data-management";
import DOM from "./domStuff";
import eventHandler from "./event-handler";


eventHandler.subscribe("subtask-list", event => {
  const parent = event.target.closest(`[data-id]`);
  const subtasks = DOM.select(".subtasks", parent);
  const subtasksAll = DOM.selectAll('.subtasks');
  const id = parent.dataset.id;
  const task = getTask(id)

  if (!subtasks) {
    const subtasks = task.getSubtasks();
    if (subtasks.length) {
      const _subtasks = DOM.createElementsByClassName(["subtasks"]);
      subtasks.forEach((task) => {
        const _subtask = createTask(task);
        _subtasks.append(_subtask);
      });
      
      parent.append(_subtasks);
      setTimeout(() => {
        _subtasks.classList.add("show");
      }, 0);
    }
  }
    //collapse all subtask
    if(subtasksAll){
      subtasksAll.forEach(s => {
        s.classList.remove("show");
        setTimeout(() => {
          s.remove();
        }, 300);
      });
    }
})
