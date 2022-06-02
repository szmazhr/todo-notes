import { loadListForm } from "../Components/list-form";
import { loadPopUp } from "../Components/pop-up";
import { AddNew, getList, lists } from "./data-management";
import DOM from "./domStuff";
import eventHandler from "./event-handler";
import { storeData } from "./localStorageManager";


function colorSelected(color) {
  const element = DOM.select(`[data-id=${color}]`)
  const parent = element.parentElement;
  const input = DOM.select("input", parent);
  const selected = DOM.selectAll(".selected", parent);

  selected.forEach((element) => {
    element.classList.remove("selected");
  })
  document.querySelector('.icon-wrapper').style.backgroundColor = color;
  input.value = color;
  element.classList.add("selected");
}

function iconSelected(icon){
  const element = DOM.select(`[data-id=${icon}]`)
  const parent = element.parentElement;
  const input = DOM.select("input", parent);
  const selected = DOM.selectAll(".selected", parent);
  input.value = icon;
  document.querySelector('.icon-wrapper i').className = `bi bi-${icon}`;
  selected.forEach((element) => {
    element.classList.remove("selected");
  })

  element.classList.add("selected");
}

eventHandler.subscribe('delete-list', e => {
  const parent = e.target.closest('[data-id]');
  const listId = parent.dataset.id;
  const list = getList(listId);
  const i = lists.indexOf(list);
  
  if (confirm(`Are you sure you want to delete ${list.title} list? All its task will be deleted`) == true) {
    const liElement = DOM.select(`.all-lists ul [data-id="${listId}"]`);
    lists.splice(i, 1);
    liElement.remove();
    eventHandler.publish("count");
    eventHandler.publish('refresh-list', 'l-0'); 
    storeData('lists', lists);
  }
})


eventHandler.subscribe('edit-list', e => {
  const parent = e.target.closest('[data-id]');
  const listId = parent.dataset.id;
  const list = getList(listId);
  loadPopUp(loadListForm(), 'Edit list');
  eventHandler.publish("open-pop-up");

  //setting up previous values
  const form = DOM.select('form');
  form['list-id'].value = list.id;
  form['list-name'].value = list.title;
  colorSelected(list.color)
  iconSelected(list.icon);
})

//list form management
eventHandler.subscribe("add-list", () => {
  loadPopUp(loadListForm(), 'Add new list');
  eventHandler.publish("open-pop-up");
  colorSelected('blue')
  iconSelected('list-ul');
})

eventHandler.subscribe("list-color-selected", (event) => {
  const id = event.currentTarget.dataset.id;
  colorSelected(id);
})

eventHandler.subscribe("list-icon-selected", (event) => {
  const id = event.currentTarget.dataset.id;
  iconSelected(id)
})


eventHandler.subscribe('list-form-submit', () => {
  const form = DOM.select('form');
  const data = {
    id: parseInt(form['list-id'].value.replace(/^(l-)/, "")) || "",
    title: form['list-name'].value || 'New List',
    color: form['list-color'].value || 'blue',
    icon: form['list-icon'].value || 'list-ul',
  }

  if (form['list-id'].value) {
    const list = getList(data.id);
    const i = lists.indexOf(list);
    const liElement = DOM.select(`.all-lists ul [data-id="l-${data.id}"]`);
    lists.splice(i, 1);
    liElement.remove();
  }

  AddNew.listItem(data);
  form.reset();
})
