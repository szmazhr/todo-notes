import eventHandler from "../Modules/event-handler";
import DOM from "../Modules/domStuff";
import { createStatusBar } from "./status-bar";
import { addClickListener } from "../Modules/click-handler";



eventHandler.subscribe('initialize', () => {
  
  const container = DOM.select('#container');
  const title = DOM.select('title').textContent;
  const [titleHeader, app, content] = DOM.createElementsByClassName(['title-header', 'header'], ['app'], ['content']);
  const header = createStatusBar('app-header');
  const footer = createStatusBar('app-footer');
  
  app.setAttribute("data-id", "app");
  DOM.textNode(title, 'h1', titleHeader);
  container.innerHTML = '';
  DOM.bulkAppend(container, [titleHeader], [app, [header], [content], [footer]]);

  
  
  //temp
  addClickListener(app, 'click-anywhere');
  eventHandler.publish('initialized');

})