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
    const _display = DOM.select("span", counter);

    let output = 0;
    switch(id){
      case 'l-scheduled': output = tasks.filter(task => !task.completed && task.dueDate).length; break;
      case 'l-all':
      case 'l-0': output = tasks.filter(task => !task.completed).length; break;
    }

    if (id.match(/^(l-)[1-9][0-9]*$/)) {
      const _id = id.split("-")[1];
      const list = getList(+_id);
      if (list) {
        output = list.getTasks().filter(task => !task.completed).length;
      }
    }
    _display.textContent = output;
  });
});
