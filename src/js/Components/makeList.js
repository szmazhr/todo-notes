import { lists } from "../Modules/data-management";
import DOM from "../Modules/domStuff";

const textAndClass = [
  {
    id: "today",
    name: "Today",
    icon: "calendar-event",
    color: "blue",
  },
  {
    id: "scheduled",
    name: "Scheduled",
    icon: "calendar3",
    color: "red",
  },
  {
    id: "all",
    name: "All",
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
  li.setAttribute("data-id", item.id);
  DOM.bsIcon(item.icon, icon);
  DOM.textNode(item.name, "span", title);
  DOM.textNode(0, "span", count);
  DOM.bulkAppend(li, [row, [icon], [title], [count]]);
  return li;
}

const primaryList = ((items) => {
  const _list = [];
  items.forEach((item) => {
    const li = createListItem(item);
    const title = DOM.select(".title", li);
    const title_wrapper = DOM.createElementsByClassName(["row"]);
    li.classList.add(item.name.toLowerCase());
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
    lists.forEach((item) => {
      list.append(createListItem(item));
    });
  }
  parent.appendChild(list);
}

export { makeList, createListItem };
