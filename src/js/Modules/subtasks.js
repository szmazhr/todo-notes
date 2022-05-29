import { createTask } from "../Components/task-card";
import { getTask } from "./data-management";
import DOM from "./domStuff";
import eventHandler from "./event-handler";


eventHandler.subscribe("subtask-list", (id) => {
  const parent = DOM.select(`[data-id="${id}"]`);
  const subtasks = DOM.select(".subtasks", parent);
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
  }else{
    subtasks.classList.remove("show");
    setTimeout(() => {
      parent.removeChild(subtasks);
    }, 300);
  }
})