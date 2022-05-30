import { loadListForm } from "../Components/list-form";
import { createListItem } from "../Components/makeList";
import { loadPopUp } from "../Components/pop-up";
import DOM from "./domStuff";
import eventHandler from "./event-handler";








//list form management
eventHandler.subscribe("add-list", () => {
  loadPopUp(loadListForm(), 'list');
  eventHandler.publish("open-pop-up");
})
eventHandler.subscribe("list-color-selected", (event) => {
  const element = event.currentTarget;
  const parent = element.parentElement;
  const input = DOM.select("input", parent);
  const selected = DOM.selectAll(".selected", parent);
  const id = element.dataset.id;
  
  selected.forEach((element) => {
    element.classList.remove("selected");
  })
  document.querySelector('.icon-wrapper').style.backgroundColor = id;
  input.value = id;
  element.classList.add("selected");
})

eventHandler.subscribe("list-icon-selected", (event) => {
  const element = event.currentTarget;
  const parent = element.parentElement;
  const input = DOM.select("input", parent);
  const selected = DOM.selectAll(".selected", parent);
  const id = element.dataset.id;
  input.value = id;
  document.querySelector('.icon-wrapper i').className = `bi bi-${id}`;
  selected.forEach((element) => {
    element.classList.remove("selected");
  })

  element.classList.add("selected");
})


eventHandler.subscribe('list-form-submit', event => {
  const form = DOM.select('form');
  const list = DOM.select('.all-lists ul');
  const data = {
    id: 99,
    title: form['list-name'].value || 'New List',
    color: form['list-color'].value || 'blue',
    icon: form['list-icon'].value || 'list-ul',

  }

  list.append(createListItem(data));
  form.reset();
})
