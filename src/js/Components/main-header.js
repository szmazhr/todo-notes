import { settings } from "../Modules/data-management";
import DOM from "../Modules/domStuff";
import { createIconButton } from "./icon-button";

const buttons = [
  {
    id: 1,
    name: "add-new",
    icon: "plus-lg",
  },
  {
    id: 2,
    name: "view-calender",
    icon: "calendar3",
  },
  {
    id: 3,
    name: "view-sort",
    icon: "filter",
  },
  {
    id: 4,
    name: "view-filter",
    icon: "funnel",
  },
  {
    id: 5,
    name: "delete-list",
    icon: "trash",
  },
];

function createMainHeader() {
  const [row, title, quick_actions] = DOM.createElementsByClassName(
    ["row"],
    ["title"],
    ["quick-actions"]
  );
  DOM.textNode("{Title}", "h2", title);
  buttons.forEach((btn) => {
    const _btn = createIconButton(btn.icon, btn.name, btn.name);
    _btn.setAttribute("data-id", `btn-${btn.name}`);
    if (btn.name === "delete-list") {
      if (!settings.temp) {
        settings.temp = {};
      }
      settings.temp.dltBtn = { element: _btn, parent: quick_actions };
      return;
    }
    quick_actions.append(_btn);
  });
  DOM.bulkAppend(row, [title], [quick_actions]);
  return row;
}

export { createMainHeader };
