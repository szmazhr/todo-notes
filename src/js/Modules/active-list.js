import { createTask } from "../Components/task-card";
import { lists, menuOptions } from "./data-management";
import DOM from "./domStuff";
import eventHandler from "./event-handler";
import { sortAndFilterTasks } from "./filter-tasks";

function selectedList(id) {
  const element = DOM.select(`.lists [data-id="${id}"]`);
  const parent = element.closest("ul");
  const selected = DOM.selectAll(".selected", parent);
  selected.forEach((e) => {
    e.classList.remove("selected");
  });

  if (id.match(/^(l-)(today|all|scheduled)*$/)) {
    const _id = id.split("-")[1];
    eventHandler.publish("filter-tasks", { quickFilter: _id });
  }

  element.classList.add("selected");
}

eventHandler.subscribe("view-list", (event) => {
  const element = event
    ? event.currentTarget
    : DOM.select(".all-lists [data-id='l-0']"); //testing purposes
  const id = element.dataset.id;
  if (id.match(/^(l-)[0-9]+$/)) {
    if (event) {
      const x = event.offsetX;
      const y = event.offsetY;

      element.style.clipPath = `circle(0px at ${x}px ${y}px)`;

      setTimeout(() => {
        element.style.clipPath = `circle(100%)`;
        setTimeout(() => {
          element.style.removeProperty("clip-path");
        }, 300);
      }, 0);
    }
  }
  selectedList(id);
  eventHandler.publish("refresh-list", id);
});

eventHandler.subscribe("refresh-list", (id) => {
  id =
    id && id.match(/^(l-)[0-9]+$/)
      ? id
      : document.querySelector(`.body`).dataset.id;

  const _body = DOM.select(".body");
  const title = DOM.select("header .title h2", _body);
  const main = DOM.select(".main-content", _body);
  main.innerHTML = "";

  _body.setAttribute("data-id", id);
  // selectedList(id);
  menuOptions.listMenuOptions["target-id"] = id === "l-0" ? "" : id;
  const list = lists.find(
    (list) => list.id === parseInt(id.replace(/^(l-)/, ""))
  );
  const _t = [];
  title.textContent = list.title;

  if (id === "l-0") {
    lists.forEach((list) => {
      _t.push(...list.getTasks());
    });
    const addBtn = DOM.select(".quick-actions .add-task");
    if (addBtn) addBtn.remove();
  } else {
    _t.push(...list.getTasks());
    const addBtn = menuOptions.temp.addBtn;
    addBtn.parent.insertAdjacentElement("afterbegin", addBtn.element);
  }

  const sorted = sortAndFilterTasks(_t);
  sorted.forEach((task) => {
    eventHandler.publish("render-task", task);
  });
});
