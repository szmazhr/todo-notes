import DOM from "../Modules/domStuff";
import { createIconButton } from "./icon-button";

const buttons = [
  {
    id: 1,
    name: "add-task",
    icon: "plus-lg",
  },
  // {
  //   id: 2,
  //   name: "view-calender",
  //   icon: "calendar3",
  // },
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
    // if (btn.name === "add-task") {
    //   if (!menuOptions.temp) {
    //     menuOptions.temp = {};
    //   }
    //   menuOptions.temp.addBtn = { element: _btn, parent: quick_actions };
    //   return;
    // }
    quick_actions.append(_btn);
  });
  DOM.bulkAppend(row, [title], [quick_actions]);
  return row;
}

export { createMainHeader };
