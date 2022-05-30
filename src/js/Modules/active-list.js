import { createTask } from "../Components/task-card";
import { lists, settings } from "./data-management";
import DOM from "./domStuff";
import eventHandler from "./event-handler";

eventHandler.subscribe("view-list", (event) => {

  const element = (event) ? event.currentTarget : DOM.select(".all-lists [data-id='l-0']");
  const _id = element.dataset.id;
  const parent = element.closest("ul");
  const selected = DOM.selectAll(".selected", parent);
  const _body = DOM.select(".body");
  const title = DOM.select("header .title h2", _body);
  const main = DOM.select(".main-content", _body);
  
  
  selected.forEach((element) => {
    element.classList.remove("selected");
  });
  
  element.classList.add("selected");
  if(_id.match(/^(l-)[0-9]+$/)){
    const list = lists.find((list) => list.id === parseInt(_id.replace(/^(l-)/, "")));      
    const _t = [];
    title.textContent = list.title;
    
    main.innerHTML = "";
    
    if(_id === 'l-0'){
      lists.forEach((list) => {
      _t.push(...list.getTasks());
    })
    const listDeleteBtn = DOM.select('.quick-actions .delete-list');
    if(listDeleteBtn) listDeleteBtn.remove();
    }else{
      _t.push(...list.getTasks());
      const dltBtn = settings.temp.dltBtn;
      dltBtn.element.setAttribute('data-target', `${_id}`);
      dltBtn.parent.append(dltBtn.element);
    }
    _t.forEach((task) => {
        main.append(createTask(task));
    })
    
  }
});
