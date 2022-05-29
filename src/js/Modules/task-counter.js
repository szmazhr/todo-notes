import eventHandler from "./event-handler";
import DOM from "./domStuff";
import { getList, lists, tasks } from "./data-management";

eventHandler.subscribe("count", () => {
  const counters = DOM.selectAll(".count");

  counters.forEach((counter) => {
    const parent = counter.closest("[data-id]");
    const id = parent.getAttribute("data-id");
    if (id === "all") {
      const _d = DOM.select("span", counter);
      _d.textContent = tasks.filter(task => !task.completed).length;
    }else if(id === 'scheduled'){
      const _d = DOM.select("span", counter);
      _d.textContent = tasks.filter(task => !task.completed && task.dueDate).length;
      console.log(id);
    }
    
    if (typeof +id === "number") {
      const list = getList(id);
      if (list) {
        const _d = DOM.select("span", counter);
        _d.textContent = list.getTasks().filter(task => !task.completed).length;
      }
    }
  });
});
