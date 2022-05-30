import { getTask } from "./data-management";
import DOM from "./domStuff";
import eventHandler from "./event-handler";
import { excerpt } from "./utils";

eventHandler.subscribe("toggleTask", (event) => {
  const _element = event.currentTarget;
  const parent = _element.closest("[data-id]");
  const id = parent.dataset.id;
  const task = getTask(id);
  const allShowed = DOM.selectAll(".task-note p.show");
  _element.classList.toggle("show");
  const description = _element.classList.contains("show")
    ? task.description
    : excerpt(task.description, 60);

    allShowed.forEach(element => {
      const _parent = element.closest("[data-id]");
      const _id = _parent.dataset.id;
      const _task = getTask(_id);
      const _description = excerpt(_task.description, 60);
      setTimeout(() => {
        element.textContent = _description;
      }, 300);
      element.classList.remove("show");
    });
    if(!_element.classList.contains("show")){
      setTimeout(() => {
        _element.textContent = description;
      }, 300);
    }else{
      _element.textContent = description;
    }
});
