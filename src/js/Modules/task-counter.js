import eventHandler from "./event-handler";
import DOM from "./domStuff";
import { lists, getList } from "./data-management";

eventHandler.subscribe("count", () => {
  const counters = DOM.selectAll(".count");

  counters.forEach((counter) => {
    const parent = counter.closest("[data-id]");
    const id = parent.getAttribute("data-id");
    const tasks = (() => {
      const _tasks = [];
      lists.forEach((list) => {
      _tasks.push(...list.getTasks());
    });
    return _tasks
    })();
    if (id === "l-all") {
      const _d = DOM.select("span", counter);
      _d.textContent = tasks.filter(task => !task.completed).length;
    }else if(id === 'l-scheduled'){
      const _d = DOM.select("span", counter);
      _d.textContent = tasks.filter(task => !task.completed && task.dueDate).length;
    }
    
    if (id.match(/^(l-)[0-9]+$/)) {
      const _id = id.split("-")[1];
      const list = getList(+_id);
      if (list) {
        const _d = DOM.select("span", counter);
        _d.textContent = list.getTasks().filter(task => !task.completed).length;
      }
    }
  });
});
