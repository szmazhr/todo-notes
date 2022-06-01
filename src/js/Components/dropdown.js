import { addClickListener } from "../Modules/click-handler";
import DOM from "../Modules/domStuff";

function createMenuItem(option) {
  const item = DOM.createElementsByClassName(["dropdown-item"]);
  if(option.icon){
    DOM.bsIcon(`${option.icon}`, item);
  }
  DOM.textNode(`${option.text}`, "span", item);
  addClickListener(item, option.eventName)
  return item;
}

const loadDropdownMenu = (() => {
  const [menu, body] = DOM.createElementsByClassName(
    ["dropdown-menu"],
    ["dropdown-body"],
  );
  menu.appendChild(body);
  return (options) => {
    body.innerHTML = "";
    menu.setAttribute("data-id", options['target-id']);
    options.items.forEach((option) => {
      if(options['target-id'] === "" && options.items.indexOf(option) !== 0) return;
      body.appendChild(createMenuItem(option));
    });
    return menu;
  };
})();



export { loadDropdownMenu };