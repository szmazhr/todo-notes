import { addClickListener } from "../Modules/click-handler";
import DOM from "../Modules/domStuff"

function createIconButton(iconName, className){
  const btn = DOM.createElementsByClassName([className, 'button']);
  DOM.bsIcon(iconName, btn);
  addClickListener(btn, className);
  return btn;
}

export { createIconButton };