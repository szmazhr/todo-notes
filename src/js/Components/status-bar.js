import DOM from "../Modules/domStuff";

const createStatusBar = (className) => {

  const _elementName = (/header/i.test(className)) ? 'header' : (/footer/i.test(className)) ? 'footer' : 'div';

  const [statusBar, left, center, right] = DOM.createElementsByClassName([className, _elementName], ['left'], ['center'], ['right']);
  DOM.bulkAppend(statusBar, [left], [center], [right]);
  return statusBar;
}

export { createStatusBar };