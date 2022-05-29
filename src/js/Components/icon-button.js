import DOM from "../Modules/domStuff"

function createIconButton(iconName, className, onClick){
  const btn = DOM.createElementsByClassName([className, 'button']);
  DOM.bsIcon(iconName, btn);
  if(onClick) btn.setAttribute('data-onClick', onClick);
  return btn;
}

export { createIconButton };