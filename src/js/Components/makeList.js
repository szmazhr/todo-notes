import { add } from "date-fns";
import { addClickListener } from "../Modules/click-handler";
import { lists } from "../Modules/data-management";
import DOM from "../Modules/domStuff";
import eventHandler from "../Modules/event-handler";
import { excerpt } from "../Modules/utils";

const textAndClass = [
  {
    id: "today",
    title: "Today",
    icon: "calendar-event",
    color: "blue",
  },
  {
    id: "scheduled",
    title: "Scheduled",
    icon: "calendar3",
    color: "red",
  },
  {
    id: "all",
    title: "All",
    icon: "inbox",
    color: "gray",
  },
];

function createListItem(item) {
  const [li, row, icon, count, title] = DOM.createElementsByClassName(
    [`list-item`, "li"],
    ["row"],
    ["icon"],
    ["count"],
    ["title"]
  );
  li.setAttribute("data-id", `l-${item.id}`);
  DOM.bsIcon(item.icon, icon);
  if (item.color) icon.style.color = item.color;
  DOM.textNode(excerpt(item.title, 15), "span", title);
  DOM.textNode(0, "span", count);
  DOM.bulkAppend(li, [row, [icon], [title], [count]]);

  addClickListener(li, "view-list");
  return li;
}

const primaryList = ((items) => {
  const _list = [];
  items.forEach((item) => {
    const li = createListItem(item);
    const title = DOM.select(".title", li);
    const title_wrapper = DOM.createElementsByClassName(["row"]);
    const icon = DOM.select(".icon", li);
    icon.style.removeProperty("color");
    li.classList.add(item.title.toLowerCase());
    title_wrapper.appendChild(title);
    li.appendChild(title_wrapper);
    _list.push(li);
  });
  return _list;
})(textAndClass);

function makeList(type = 1, parent) {
  const list = DOM.createElements("ul");

  if (type === 1) {
    list.append(...primaryList);
  } else if (type === 2) {
    list.append(createListItem(lists[0]));
  }
  parent.appendChild(list);
}

export { makeList, createListItem };

eventHandler.subscribe("added-list-item", (item) => {
  const list = DOM.select(".all-lists ul");
  list.append(createListItem(item));
  eventHandler.publish("count");
});
