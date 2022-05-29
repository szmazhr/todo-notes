import eventHandler from "../Modules/event-handler";
import DOM from "../Modules/domStuff";
import { createStatusBar } from "./status-bar";
import { Clock } from "../Modules/clock";



eventHandler.subscribe('initialize', () => {
  let clock = new Clock('M D h:m:s');
  
  const container = DOM.select('#container');
  const title = DOM.select('title').textContent;
  const [titleHeader, app, content] = DOM.createElementsByClassName(['title-header', 'header'], ['app'], ['content']);
  const header = createStatusBar('app-header');
  const footer = createStatusBar('app-footer');
  const clockPlace = DOM.select('.center', header);
  DOM.textNode(title, 'h1', titleHeader);
  container.innerHTML = '';
  DOM.bulkAppend(container, [titleHeader], [app, [header], [content], [footer]]);
  clock.start(clockPlace); 
  eventHandler.publish('initialized');
})