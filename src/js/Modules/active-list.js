import { createTask } from "../Components/task-card";
import { lists } from "./data-management";
import DOM from "./domStuff";
import eventHandler from "./event-handler";

eventHandler.subscribe("view-list", (id) => {
  const _id = id || `l-${lists[0].id}`;
  const element = DOM.select(`[data-id="${_id}"]`);
  const parent = element.closest("ul");
  const selected = DOM.selectAll(".selected", parent);
  
  
  selected.forEach((element) => {
    element.classList.remove("selected");
  });
  
  element.classList.add("selected");
  
  if(_id.match(/^(l-)[0-9]+$/)){
    const _body = DOM.select(".body");
    const title = DOM.select("header .title", _body);
    const main = DOM.select(".main-content", _body);
    const list = lists.find((list) => list.id === parseInt(_id.replace(/^(l-)/, "")));
    
    title.textContent = list.title;
    main.innerHTML = "";

    list.getTasks().forEach(task => {
      const _task = createTask(task);
      main.append(_task);
    });

    console.log(_body)
    
  }
});
